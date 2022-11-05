# BibX: Requirements

### Xavier Clark <x> & Tom Knockenhauer <t>

# Introduction <t>

BibX is an open-source bibliography generator that aims to solve the issue plaguing the other large bibliography generators on the market; profit. Students have grown accustomed to using one of a few bibliography generators to cite their papers, meaning many do not realize the decisions these companies are making in an attempt to increase profits off each visitor. Constant advertisements intended to disrupt the user’s viewing and speed of the webpage, promises of a better experience upon sign up only to realize a paid subscription is required for much of the upgrades, all while the companies have already acquired your information. BibX aims to provide better service whilst making no upfront or behind-the-scenes attempts to grab information or money from the user.

# Functional Requirements

## BibX UI: <x>

In an effort to make the citation creation process as easy as possible, BibX attempts to fill in as many parts of the citation as it can automatically. BibX will prompt the user for specific pieces of information if it is unable to complete the citation automatically.

BibX’s UI will not feature any ads or intrusive pop ups. It will also feature a toggle to switch between light and dark mode. 

## Source Identifiers: <x>

When first accessing BibX, users will be prompted to enter an identifier for a source of information they would like to cite. Users will be able to enter many different types of identifier, starting with URLs, ISBNs, and arXiv IDs. BibX will then attempt to automatically gather as much information as it can about that source in order to create the citation. 

If the identifier is malformed or BibX is unable to find anything about the source, the user will be asked to fill in the required fields manually.

## Citation Style: <x>
BibX will have the ability to format the citations to fit many of the most common citation styles, starting with MLA 8 and APA. The main page of BibX will feature a dropdown selector for citation styles, allowing for the user to select a citation style on the fly. When this is changed all citations in the user’s bibliography will change to match the new citation style.

## Citation Storage: <x>

After a citation is created, it will be shown in a list on the BibX’s front page. This is known as the user’s “bibliography.” Users will be able to easily copy each individual citation from the bibliography as well as export all of the citations at once as a formatted bibliography. 

These citations will be stored locally on the user’s machine. This means that the state of the user’s bibliography will persist even after closing the page, without needing to store anything on our servers.

## Unsuccessful Citation: <t>

There are two types of unsuccessful citation attempts. First would be a citation that is recognized by BibX as being incorrect or too incomplete. For example, this could be from a user selecting “URL” while searching with an ISBN number, or performing too unspecific of a search that BibX finds too many matches for their article title. In any case, BibX will inform the user before with an error message informing them their search was invalid, and to reexamine their text entry and source form.

The other case of an unsuccessful citation would be BibX failing to find the source that the user searched for. This could be from an incorrect entry into the search bar (incorrect book title or ISBN, for example), or BibX failing to find it in our databases. The user will then be presented with an error message explaining BibX could not find the source and prompts the users to reexamine their entry to ensure correct usage.

## Use Cases: <t>

The user’s first citation:

When a user first opens BibX, they will be presented with the name of the website and an empty text-entry box that prompts them to “Enter a URL, ISBN, Article title, etc…”. After the user chooses what they would like to cite, they press enter and a window appears for the user to select their source identifier from a drop down menu.. A form is then created, which users are then prompted to choose their citation style, and automatically filled out with all the information BibX could pull from our databases. Users are free to either edit the information already contained in the form, or fill in information they would like for their citation BibX was not able to provide. After pressing continue, the user is back on the homepage, with their new citation listed below the text entry bar.

Using the citation:

Using the citation is very straightforward. BibX stores citations in the user’s localstorage, so users can have access to previous citations each time they enter the app. To use your created citation, simply locate the chosen citation on the screen and either highlight it and utilize copy and paste, or press the “save to clipboard icon” to save it with the desired formatting.

Removing Citations:

Since BibX utilizes localstorage, users can manually delete whatever they would like from their storage through their web browser, or can use BibX’s reset button to clear the cache of citations.

# Non-Functional Requirements

## Platform: <x>

Since BibX is a static website, BibX should run on any device that can run a web browser with javascript. We will be focusing on the three major desktop browsers - Firefox, Chrome, and Safari.

## Performance: <x>

BibX strives to be as lightweight and responsive as possible. Being just a website, BibX shouldn’t require any more system resources than your typical browser tab. If a user has a fast (>100 mbps) internet connection, BibX’s search should take no more than 15 seconds.

## Security: <x>

BibX requires no authentication when using the site and does not track users or keep logs. All data is stored locally using localstorage.  

## User Characteristics: <x>

BibX is intended to be used by students and similar individuals writing short research papers. BibX is not intended to be used by extremely tech-savvy people and thus should have a very small learning curve. Users will need an understanding of citations and citation styles before using BibX. 

## Scale: <t>

BibX is hosted with the help of GitHub Pages, so the scale is currently limited to the capacity allowed for us by GitHub. GitHub Pages locks the repository file size to a maximum of one GB and documents that builds (like BibX) have a bandwidth limit of 100 GB per month.

## Documentation: <t>

1. Design Documentation. This document shall be a detailed design that describes how the various components of the system work. It may include block diagrams, schematics, or code snippets, as appropriate. The audience of this document is other developers who might want to understand and extend the system.
2. User Documentation. This document shall describe how to install, configure, and use the system. The audience of this document is people who want to use the system without understanding the internal operation of the system.
3. Website. A website shall be produced that describes the system. The audience of this site is potential users considering the system and current users looking for technical support. This site is hosted on GitHub by Xavier Clark: https://github.com/xavierclarkvt/bibx.

## Data Formats: <x>

BibX takes only text as input for source searching. The input text usually takes the form of a URL or an ISBN number, and output text takes the form of a formatted citation. 

## Internationalization: <t>

BibX is currently only designed to be used by people who can read and write English.

## Expected Enhancements: <t>

Expect the number of citation styles and overall number of source identifiers available to improve during the application’s lifespan.

## Date: <t>

The final presentation will be on or about the last day of classes of the Spring 2023 semester. The final demonstration (if needed) and the documentation will be due at the end of finals week.