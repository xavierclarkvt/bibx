<script type="ts">
	import { itemlist } from '$lib/stores';

	function onSubmit(e: Event) {
		const formData = new FormData(e?.target as HTMLFormElement);

		console.log([...formData]);

		const data: any = {};
		for (const [key, value] of formData) {
			data[key] = value;
		}
		console.log(data);
		//@ts-ignore
		itemlist.addItem({ val: data?.itemInput });
		(e?.target as HTMLFormElement)?.reset();
	}
</script>

<svelte:head>
	<title>Bibliography Generator</title>
</svelte:head>

<!-- <h1 class="text-xl text-center">Welcome to SvelteKit</h1> -->

<div class="grid grid-cols-1 place-items-center">
	<div class="my-10">
		<h1 class="text text-8xl text-center font-serif">BibX</h1>
		<h3 class="mt-3 text text-center text-lg">A Better Bibliography Generator</h3>
	</div>
	<form on:submit|preventDefault={onSubmit}>
		<input
			type="text"
			id="itemInput"
			name="itemInput"
			placeholder="Enter a URL, ISBN, Article Title, etc..."
			class="input input-bordered w-[60vw]"
		/>
		<button class="btn btn-primary btn-square" type="submit"> s </button>
	</form>
	{#each $itemlist as item (item)}
		<div class="card card-compact card-bordered w-[60vw] mt-5 bg-base-100 shadow-sm">
			<div class="card-body">
				<div class="flex justify-between items-center">
					<p class="inline-block align-middle">{item}</p>
					<button
						class="btn btn-sm btn-error btn-circle btn-outline text-error-content"
						on:click={(e) => {
							console.log(e);
							console.log('AAAAAA', item);
						}}
					>
						x
					</button>
				</div>
			</div>
		</div>
	{/each}
	<button class="btn btn-error btn-wide" on:click={itemlist.reset}>reset</button>
</div>
