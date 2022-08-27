<!--  -->
<script type="ts">
	import { citationlist } from '$lib/stores';
</script>

{#each $citationlist as citation, i (citation.uuid)}
	{#if i !== 0}
		<hr class="mt-5 mx-auto w-[60vw] h-[2px] rounded border-0 bg-secondary" />
	{/if}
	<div class="w-[60vw] mt-5 bg-base-100">
		<div class="flex justify-between items-center">
			<p class="inline-block align-middle">{JSON.stringify(citation)}</p>
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
