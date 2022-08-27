<!-- 
  The handles the creation of citations and adding them to the citationList store
  Each citation needs to follow the Citation object
-->
<script type="ts">
	import { citationlist } from '$lib/stores';

	function onSubmit(e: Event) {
		const formData = new FormData(e?.target as HTMLFormElement);
		// console.log([...formData]); this is how you console.log formdata
		const data: any = {};
		for (const [key, value] of formData) {
			data[key] = value;
		}

		citationlist.addCitation({ url: data?.itemInput, uuid: crypto.randomUUID() });
		(e?.target as HTMLFormElement)?.reset();
	}
</script>

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
