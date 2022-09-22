<!-- 
  The handles the creation of citations and adding them to the citationList store
  Each citation needs to follow the Citation object
-->
<script type="ts">
	import { citationlist } from '$lib/stores';
	import { Form, Field, Select, ErrorMessage } from 'svelte-forms-lib';

	let modal: any;
	let formContext: any;

	const formProps = {
		initialValues: {
			url: ''
		},
		onSubmit: onFormSubmit
	};

	function onMainbarSubmit(e: Event) {
		const formData = new FormData(e?.target as HTMLFormElement);
		// console.log([...formData]); this is how you console.log formdata
		const data: any = {};
		for (const [key, value] of formData) {
			data[key] = value;
		}

		formContext.updateInitialValues({ url: data.itemInput });

		modal.classList.add('modal-open');
		(e?.target as HTMLFormElement)?.reset();
	}

	function onFormSubmit(v: any) {
		citationlist.addCitation({ ...v, uuid: crypto.randomUUID() });
		modal.classList.remove('modal-open');
	}
</script>

<form on:submit|preventDefault={onMainbarSubmit}>
	<input
		type="text"
		id="itemInput"
		name="itemInput"
		placeholder="Enter a URL, ISBN, Article Title, etc..."
		class="input input-bordered w-[60vw]"
	/>
	<button class="btn btn-primary btn-square text-xl" type="submit"> → </button>
</form>

<!-- Modal for more info about citation -->
<div bind:this={modal} class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<div
			class="btn btn-sm btn-circle absolute right-2 top-2"
			on:click={modal.classList.remove('modal-open')}
		>
			✕
		</div>

		<h3 class="text-lg font-bold">More Info Modal</h3>

		<Form bind:context={formContext} {...formProps} class="p-5">
			<label for="type">Type: </label>
			<Select name="type" class="select select-bordered">
				<option />
				<option>Article</option>
				<option>Book</option>
				<option selected>Website</option>
			</Select>
			<ErrorMessage name="type" />

			<br class="my-5" />

			<label for="url">URL: </label>
			<Field name="url" class="input input-bordered" />
			<ErrorMessage name="url" />

			<div class="modal-action">
				<button class="btn btn-primary btn-square" type="submit"> ✓ </button>
			</div>
		</Form>
	</div>
</div>
