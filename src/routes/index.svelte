<script>
	let count = 0;
</script>

<svelte:head>
	<title>Bibliography Generator</title>
</svelte:head>

<div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
	<h1 class="text-xl">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<p class="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
	<p class="text-gray-500 text-lg">SvelteKit and Tailwind CSS in action</p>

	<h1 class="text-3xl text-center">
		{count}
		THIS IS A TEST MESSAGE
	</h1>

	<div class="text-center">
		<button class="btn" on:click={() => count++}>+</button>
		<button class="btn" on:click={() => count--}>-</button>
		<button class="btn" on:click={() => (count = 0)}>reset</button>
	</div>
</div>
