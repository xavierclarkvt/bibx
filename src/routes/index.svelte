<script type="ts">
	import CitationListCards from '$lib/comps/CitationListCards.svelte';
	import CitationCreationForm from '$lib/comps/CitationCreationForm.svelte';
</script>

<svelte:head>
	<title>Bibliography Generator</title>
</svelte:head>

<!-- <h1 class="text-xl text-center">Welcome to SvelteKit</h1> -->

<div class="grid grid-cols-1 place-items-center">
	<div class="mt-44 mb-14">
		<h1 class="text text-8xl text-center font-serif">BibX</h1>
		<h3 class="mt-3 text text-center text-lg">A Better Bibliography Generator</h3>
	</div>
	<CitationCreationForm />
	<CitationListCards />
</div>
