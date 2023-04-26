<!-- 
  The handles the creation of citations and adding them to the citationList store
  Each citation needs to follow the Citation object
-->
<script type="ts">
	import CitationInfoForm from './CitationInfoForm.svelte';

	let showModal = false;
	let initialValues: any;

	function onMainbarSubmit(e: Event) {
		const formData = new FormData(e?.target as HTMLFormElement);
		const data: any = {};

		// TODO: Add code that automatically decides citation type (book, website, newspaper article)

		initialValues = {
			type: 'Website', //TODO: Don't do this, figure out what the citation type is an
			title: '',
			author_first: '',
			author_last: '',
			publisher: '',
			container_title: '',
			misc_contr: '',
			number: '',
			version: '',
			pub_date: '',
			accessed_date: new Date().toJSON().slice(0, 10),
			location: [...formData][0][1]
		};

		showModal = true;
		(e?.target as HTMLFormElement)?.reset();
	}
</script>

<form on:submit|preventDefault={onMainbarSubmit} class="flex flex-row">
	<input
		type="text"
		id="itemInput"
		name="itemInput"
		placeholder="Enter a URL, ISBN, Article Title, etc..."
		class="input input-bordered w-[56vw] mr-1"
	/>
	<button class="btn btn-primary btn-square text-xl" type="submit"> → </button>
</form>

{#if showModal}
	<CitationInfoForm
		{initialValues}
		on:setShowFalse={() => {
			showModal = false;
		}}
	/>
{/if}
