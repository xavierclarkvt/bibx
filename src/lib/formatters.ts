/**
 * Contains the functions that will be used to format individual citations
 * based on which bibliography type is selected.
 */
import type { Citation } from '$lib/types';

/**
 * Takes a citation and spits out a string in the format of an MLA citation
 * see: https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_formatting_and_style_guide.html
 * @param citation The citation you'd like to format
 * @returns your formatted MLA citation (as a string)
 */
function mlaFormatter(citation: Citation): string {
	let result = '';

	// author
	if (citation.author_first || citation.author_last) {
		result += citation.author_last ?? '';
		result += citation.author_last && citation.author_first ? ', ' : '';
		result += citation.author_first ?? '';
		result += '. ';
	}

	// title of source
	if (citation.title) {
		const p_flag = citation.title.slice(-1) !== '.';
		switch (citation.type) {
			case 'Article':
			case 'Website':
				result += '"' + citation.title + (p_flag ? '.' : '') + '" ';
				break;
			case 'Book':
				result += '<em>' + citation.title + (p_flag ? '.' : '') + '</em> ';
				break;
			default:
				console.error('Unknown Type for citation: ', citation.uuid);
		}
	}

	// title of container
	if (citation.container_title) {
		switch (citation.type) {
			case 'Article':
			case 'Website':
				result += '<em>' + citation.container_title + ',</em> ';
				break;
			case 'Book':
				result += citation.container_title + ', ';
				break;
			default:
				console.error('Unknown Type for citation: ', citation.uuid);
		}
	}

	// title of container (but you only put a publisher)
	if (citation.publisher && citation.type == 'Website' && !citation.container_title) {
		result += '<em>' + citation.publisher + ',</em> ';
	}

	// other contributors
	result += citation.misc_contr ? citation.misc_contr + ', ' : '';

	// version
	result += citation.version ? citation.version + ', ' : '';

	// number
	result += citation.number ? citation.number + ', ' : '';

	// publisher
	if (citation.publisher && citation.type !== 'Website' && citation.container_title) {
		result += citation.publisher + ', ';
	}

	// publication date
	result += citation.pub_date ?? '';

	// location
	if (citation.location) {
		let loc = citation.location;
		if (loc.slice(0, 5) === 'https') {
			loc = loc.slice(8);
		} else if (loc.slice(0, 4) === 'http') {
			loc = loc.slice(7);
		}

		result += ', ' + loc + '. ';
	} else {
		result += '. ';
	}

	// accessed date
	result += citation.accessed_date ? 'Accessed on ' + citation.accessed_date + '.' : '';

	return result; //should make sure the value will be string
}

/**
 * Takes a citation and spits out a string in the format of a Chicago citation
 * see: https://owl.purdue.edu/owl/research_and_citation/chicago_manual_17th_edition/cmos_formatting_and_style_guide/chicago_manual_of_style_17th_edition.html
 * @param citation The citation you'd like to format
 * @returns your formatted Chicago citation (as a string)
 */
function chicagoFormatter(citation: Citation): string {
	let result = '';

	// author
	if (citation.author_first || citation.author_last) {
		result += citation.author_last ?? '';
		result += citation.author_last && citation.author_first ? ', ' : '';
		result += citation.author_first ?? '';
		result += '. ';
	}

	// title of source
	if (citation.title) {
		const p_flag = citation.title.slice(-1) !== '.';
		result += '"' + citation.title + (p_flag ? '.' : '') + '" ';
	}

	// publisher
	result += citation.publisher ? citation.publisher + ', ' : '';

	// publication date
	result += citation.pub_date ? 'published ' + citation.pub_date.slice(0, 4) + '. ' : '';

	// location
	if (citation.location) {
		let loc = citation.location;
		if (loc.slice(0, 5) === 'https') {
			loc = loc.slice(8);
		} else if (loc.slice(0, 4) === 'http') {
			loc = loc.slice(7);
		}

		result += loc + '. ';
	}

	return result; //should make sure the value will be string
}

/** this is the big formatter JSON object that you'll use to access the individual formatters */
export const formatters = {
	mla: mlaFormatter,
	chicago: chicagoFormatter,
	apa: () => {
		return 'apa not implemented';
	}
};
