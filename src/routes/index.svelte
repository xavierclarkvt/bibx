<script type="ts">
	import CitationListCards from '$lib/comps/CitationListCards.svelte';
	import CitationCreationForm from '$lib/comps/CitationCreationForm.svelte';
	import CitationFormatSelector from '$lib/comps/CitationFormatSelector.svelte';
</script>

<svelte:head>
	<title>Bibliography Generator</title>
</svelte:head>

<div class="grid grid-cols-1 place-items-center">
	<div class="mt-44 mb-14">
		<h1 class="text text-8xl text-center font-serif">
			Bib<span style="-webkit-text-stroke: .1em hsl(var(--p)); paint-order: stroke fill;">X</span>
		</h1>
		<h3 class="mt-3 text text-center text-lg">A Better Bibliography Generator</h3>
	</div>

	<div class="flex flex-row">
		<CitationFormatSelector />
		<CitationCreationForm />
	</div>
	<CitationListCards />
</div>
