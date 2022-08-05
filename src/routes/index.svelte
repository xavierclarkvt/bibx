<script>
	let count = 0;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>
	{count}
	THIS IS A TEST MESSAGE
</h1>

<button on:click={() => count++}>+</button>
<button on:click={() => count--}>-</button>
<button on:click={() => (count = 0)}>reset</button>
