<!-- 
  Rendering for the citation cards
  All citations should go through a formatter before being displayed
  Also contains the button to reset the citationList to empty
-->
<script type="ts">
	import { citationlist } from '$lib/stores';
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
		<div class="max-w-[80%] break-words">
			<!-- TODO: delete containing div when you delete the <pre> -->
			<p style="text-indent: -1em; padding-left: 1em;">
				{citation.formattedString}
			</p>
			<pre class="break-words text-xs text-gray-400">{JSON.stringify(citation, null, 2)}</pre>
		</div>
		<div class="flex flex-nowrap max-w-[20%]">
			<!-- COPY BUTTON -->
			<div id="copyTooltip{i}" class="tooltip" data-tip="Copy to Clipboard">
				<button
					class="btn btn-xs btn-ghost mr-1"
					on:click={async () => {
						// copy the formattedString for that citation to the clipboard
						await navigator.clipboard.writeText(citation.formattedString);
						// set the tooltip to reflect that copy worked
						document.getElementById(`copyTooltip${i}`)?.setAttribute('data-tip', 'Copied!');
						// set the tooltip back after one second
						setTimeout(
							() =>
								document
									.getElementById(`copyTooltip${i}`)
									?.setAttribute('data-tip', 'Copy to Clipboard'),
							1000
						);
					}}
				>
					<svg class="w-5 h-5 fill-secondary">
						<use href="icons/copy.svg#icon" />
					</svg>
				</button>
			</div>
			<!-- EDIT BUTTON -->
			<div id="editTooltip{i}" class="tooltip" data-tip="Edit This Citation">
				<button class="btn btn-xs btn-ghost mr-1" on:click={() => editCitation(citation)}>
					<svg class="w-5 h-5 fill-primary">
						<use href="icons/pen-to-square.svg#icon" />
					</svg>
				</button>
			</div>
			<!-- DELETE BUTTON -->
			<div id="deleteTooltip{i}" class="tooltip" data-tip="Delete This Citation">
				<button
					class="btn btn-xs btn-ghost"
					on:click={() => citationlist.removeCitationByUUID(citation.uuid)}
				>
					<svg class="w-5 h-5 fill-error">
						<use href="icons/circle-xmark.svg#icon" />
					</svg>
				</button>
			</div>
		</div>
	</div>
{/each}

{#if $citationlist.length > 0}
	<button class="btn btn-sm btn-outline btn-error btn-wide my-5" on:click={citationlist.reset}>
		reset
	</button>
{/if}

{#if showModal}
	<CitationInfoForm
		{initialValues}
		on:setShowFalse={() => {
			showModal = false;
		}}
	/>
{/if}
