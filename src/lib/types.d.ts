/**
 * An object of bibliography types 
 */
export type Citation = {
  uuid: string, 
  formattedString: string,
  [key:string]: string,
};

/**
 * All of the possible different types of bibliography (citation) formats
 */
export type FormatType = 'mla' | 'apa' | 'chicago';