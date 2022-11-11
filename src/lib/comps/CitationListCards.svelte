<!-- 
  Rendering for the citation cards
  All citations should go through a formatter before being displayed
  Also contains the button to reset the citationList to empty
-->
<script type="ts">
	import { citationlist, currentCitationFormat } from '$lib/stores';
	import { formatters } from '$lib/formatters';
</script>

{#each $citationlist as citation, i (citation.uuid)}
	{#if i !== 0}
		<hr class="mt-5 mx-auto w-[60vw] border-1 border-dashed border-neutral-content" />
	{/if}
	<div class="w-[60vw] mt-5 bg-base-100">
		<div class="flex justify-between items-center">
			<div>
				<!-- delete containing div when you delete the <pre> -->
				<p>{formatters[$currentCitationFormat](citation)}</p>
				<pre class="text-xs text-gray-400">{JSON.stringify(citation)}</pre>
			</div>
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
