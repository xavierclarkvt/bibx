# BibX: System Design and Architecture

### Xavier Clark <x> & Tom Knockenhauer <t>

### Last Updated: May 8th, 2023

# UI Architecture

The majority of the UI is described shortly in the Requirements document, but much of the details are better left for this design document. 

BibX’s UI is minimalist in design and consists of a single home page with two modal windows. 

The home page, see Figure 1, consists of text-entry box prompting the user to enter a URL or article title, or an identifying attribute from a book like ISBN or the title. On the left and right of the text-entry box is a drop-down menu indicating which citation style to choose and enter button to start the search. 

<img width="742" alt="image" src="https://user-images.githubusercontent.com/70333748/236889653-b7ec4c93-2301-40c7-8bd9-6e27207972df.png">
  
After pressing the enter, the user is presented with a modal window (see Figure 2) with a drop-down menu that asks the user to specify what medium the source they are siting is; a website or a book for example, along with text-entry and date picker option for all of the information needed to cite in the chosen style.

<img width="764" alt="image" src="https://user-images.githubusercontent.com/70333748/236889787-a95922b2-ef32-479a-82bb-c065155c7037.png">

After the citation entry is finished (or saved for later editing), the source will appear on the home screen with a copy-and-paste, edit citation, and delete button, see the bottom portion of Figure 1. 

# System Architecture

There are four main Svelte scripts that work together and drive the system. Figure 3 is a simplified view of BibX’s system design.

<img width="414" alt="image" src="https://user-images.githubusercontent.com/70333748/236889958-78279cf7-cd5b-4da6-997f-7ad8f978b676.png">
  
## MainForm:
This script contains the main text-entry box in the middle of Figure 1 and the citation style drop down. It takes the aforementioned URL, article title, etc., and uses that to give the citation a start in for the next page. 

## InfoForm:
This script contains the modal seen in Figure 2 and saves all of the information given into a single citation ‘object’ that is then passed into the Formatter script. Most of the locations are text-entry boxes, but a date picker is used for the access and publication date. 

## Formatter:
The formatting script takes the citation object created in InfoForm and formats it based on the given citation style selected on the home screen. This script is not in charge of displaying the information, as that done in the next step.

## List:
The ‘List’ script is used to contain and display the citations, along with editing or deleting said citations. It contains a delete, edit, and ‘copy to clipboard’ button on each displayed citation, along with  a reset button that would delete all saved citations. 


# Design Details/Risks

The core identity of BibX is to be as straight forward of a bibliography creator as possible. That would mean no ads on the page or deceptive formatting, and complete data transparency and trust that your information is safe. This in turn created issues with collecting meta-data from given URLs and articles to fill in some of the citation for the user. Violating CORS made securing user’s data much harder and we found the risks outweighed the rewards regarding including it in our project. 

With this, BibX was able to remain extremely lean in its code and continue with our original goal.
