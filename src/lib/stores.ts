/**
 * The svelte store for the citationList (and other stores).
 */
import {writable} from 'svelte/store'; 
import type { Citation } from './types';

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
     * @param citation the citation object you'd like to add
     */
    addCitation: (citation:Citation) => {
      update(n => [citation, ...n])
    },
    /**
     * Remove a citaion from the list 
     * @param citation the entire citation object you would like to remove from the list
     */
		removeCitation: (citation:Citation) => {
      update(n => n.filter(v => v.uuid !== citation.uuid))
    },
    /**
     * Remove a citation from the list using a uuid as the identifier
     * @param uuid the uuid for the citation you'd like to remove from the list
     */
    removeCitationByUUID: (uuid:string) => {
      update(n => n.filter(v => v.uuid !== uuid))
    },
    /**
     * Reset the Citation state to empty
     */
		reset: () => set([] as Citation[])
	};
}

export const citationlist = createCitationlist();

// instantly subscribe to citationlist so that every change is pushed into localStorage
if (typeof localStorage !== 'undefined') {
  citationlist.subscribe(v => {
    localStorage.setItem('citationArray', JSON.stringify(v))
  })
}