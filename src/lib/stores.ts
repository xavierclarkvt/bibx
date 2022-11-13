/**
 * The svelte store for the citationList (and other stores).
 */
import {writable} from 'svelte/store'; 
import type { Citation, FormatType } from './types';
import { formatters } from '$lib/formatters';


// current citation format, must be one of the ones listed in FormatTypes
export const currentCitationFormat = writable(
  typeof localStorage !== 'undefined' ? localStorage.getItem('citationFormat') as FormatType
  ?? 'mla' as FormatType
  : 'mla' as FormatType
);

function createCitationlist() {
  let initArray: Citation[];

  // load array from localstorage if key exists
  if (typeof localStorage !== 'undefined' && localStorage.getItem('citationArray')) 
    initArray = JSON.parse(localStorage.getItem('citationArray') ?? 'null') as Citation[];
  else 
    initArray = [] as Citation[];
  
	const { subscribe, set, update } = writable(initArray);

	return {
		subscribe,
    /**
     * Add new citation to list
     * Also sorts the citations by alphabetical order of the formatted citation strings
     * @param citation the citation object you'd like to add
     */
    addCitation: (citation:Citation) => {
      update(n => [citation, ...n].sort((a,b) => a.formattedString.localeCompare(b.formattedString)))
    },
    /**
     * Remove a citation from the list using a uuid as the identifier
     * @param uuid the uuid for the citation you'd like to remove from the list
     */
    removeCitationByUUID: (uuid:string) => {
      update(n => n.filter(v => v.uuid !== uuid))
    },
    /**
     * change the formatString for all citations to match the a given citation format
     * since order may end up being different with a different format, sort all of the citations
     * @param format the format that you would like each citation's formatString to have
     */
    changeFormat: (format:FormatType) => {
      update(n => n.map((a: Citation) => {return {...a, formattedString: formatters[format](a)}})
                    .sort((a,b) => a.formattedString.localeCompare(b.formattedString))
      )
    },
    /**
     * Reset the Citation state to empty
     */
		reset: () => set([] as Citation[])
	};
}

export const citationlist = createCitationlist();

// instantly subscribe to citationlist and currentCitationFormat 
// so that every change is pushed into localStorage
if (typeof localStorage !== 'undefined') {
  citationlist.subscribe(v => {
    localStorage.setItem('citationArray', JSON.stringify(v))
  })

  currentCitationFormat.subscribe(v => {
    citationlist.changeFormat(v); //make sure format change is reflected in citationlist
    localStorage.setItem('citationFormat', v)
  })
}