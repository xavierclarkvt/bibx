<!-- 
  Rendering for the citation cards
  All citations should go through a formatter before being displayed
  Also contains the button to reset the citationList to empty
  TODO: Citations should be in alphabetical order 
  (^^^ CHECK WITH PERDUE OWL TO MAKE SURE THIS IS CORRECT ^^^)
-->
<script type="ts">
	import { citationlist, currentCitationFormat } from '$lib/stores';
	import { formatters } from '$lib/formatters';
	import type { Citation } from '$lib/types';
	import CitationInfoForm from './CitationInfoForm.svelte';

	let initialValues: any;
	let showModal = false;

	/**
	 * Edits a citation by setting the values of a citation into initalValues and opens the citation
	 * creation modal. The old citation will be deleted within the modal component, a new one being
	 * created to fill its spot
	 *
	 * @param citation the citation you would like to edit
	 */
	function editCitation(citation: Citation) {
		initialValues = citation;
		showModal = true;
	}
</script>

{#each $citationlist as citation, i (citation.uuid)}
	{#if i !== 0}
		<hr class="mt-5 mx-auto w-[60vw] border-1 border-dashed border-neutral-content" />
	{/if}
	<div class="flex justify-between items-center w-[60vw] mt-5 bg-base-100">
		<div>
			<!-- delete containing div when you delete the <pre> -->
			<p>{formatters[$currentCitationFormat](citation)}</p>
			<pre class="text-xs text-gray-400">{JSON.stringify(citation)}</pre>
		</div>
		<div>
			<button
				class="btn btn-xs btn-primary rounded-btn btn-outline text-error-content"
				on:click={() => editCitation(citation)}
			>
				edit
			</button>
			<button
				class="btn btn-xs btn-error btn-circle btn-outline text-error-content"
				on:click={() => citationlist.removeCitationByUUID(citation.uuid)}
			>
				x
			</button>
		</div>
	</div>
{/each}
<button class="btn btn-sm btn-outline btn-error btn-wide my-5" on:click={citationlist.reset}>
	reset
</button>

{#if showModal}
	<CitationInfoForm
		{initialValues}
		on:setShowFalse={() => {
			showModal = false;
		}}
	/>
{/if}
