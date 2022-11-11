/**
 * Contains the functions that will be used to format individual citations
 * based on which bibliography type is selected. 
 */
import type { Citation } from '$lib/types';

/**
 * Takes a citation and spits out a string in the format of an MLA citation
 * @param citation The citation you'd like to format
 * @returns your formatted MLA citation (as a string)
 */
function mlaFormatter(citation: Citation): string {
  return String(citation.url); //should make sure the value will be string
}

/** this is the big formatter JSON object that you'll use to access the individual formatters */
export const formatters = {
  'mla': mlaFormatter,
  'chicago': () => {return "chicago not implemented"},
  'apa': () => {return "apa not implemented"}
}