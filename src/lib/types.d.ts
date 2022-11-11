/**
 * An object of bibliography types 
 */
export type Citation = {
  uuid:string,
  [key:string]: unknown,
};

/**
 * All of the possible different types of bibliography (citation) formats
 */
export type FormatType = 'mla' | 'apa' | 'chicago';