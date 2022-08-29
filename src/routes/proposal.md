# Proposal: Bibx, a Better Bibliography Creator
Xavier Clark `<xavier@clar.cx>`, Tom Knockenhower `<tmk03150@vsc.edu>`

As every student knows: it's incredibly important to cite the resources you use when creating anything. Failing to do so is plagerism - stealing the work of that other party. Citations require special formatting depending on the type of work being cited and the type of work the citation is being used in. For example, sections of the Bible are cited differently in MLA than news articles from the web are. Both of those types of work are different when writing APA citations. This all gets very confusing, very fast.

## Project Description

In this project we will create a bibliography generator. Bibliography generators help students with that confusing formatting when writing essays and papers. Bibliography generators will take some identifier (URL, ISBN, ARXIV id, etc) are find the rest of the information required to properly cite that source. After the needed information is gathered the program formats said information to match whatever format requested.

## Similar Products

There are a few other bibliography generators available right now, namely https://citationmachine.com/ and https://easybib.com/. Both are owned by Chegg (who is owned by Amazon) and bombard the user with ads. Both only do one type of citation format (APA and MLA, respectively). Both add in long waits and make copying your citations difficult in the attempt to annoy you into paying for "Chegg Premium." Our bibliography generator will be more useful and easier to use.

## Deliverables

We will create a website that:
- can format citations using multiple different citation types
- can gather the information required for the above citations using very little information (URL, ISBN, ARXIV id, etc)
- gathers and stores its information locally, not requiring constant access to a server to use
- is relatively small so even users with poor internet connections can use it
- has no logging in
- has no ads or user tracking