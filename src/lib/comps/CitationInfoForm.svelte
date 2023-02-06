<!-- 
  The handles the creation of citations and adding them to the citationList store
  Each citation needs to follow the Citation object
-->
<script type="ts">
	import { createEventDispatcher } from 'svelte';
	import { Form, Field, Select, ErrorMessage } from 'svelte-forms-lib';
	import { citationlist, currentCitationFormat } from '$lib/stores';
	import { formatters } from '$lib/formatters';
	import type { Citation } from '$lib/types';

	export let initialValues = { url: '' };
	const dispatch = createEventDispatcher();

	/**
	 * Sends an event to the parent to unshow the modal.
	 * This is important because changing a prop inside the component _does not_ change it in the parent
	 */
	function setShowFalse() {
		dispatch('setShowFalse', {});
	}

	/**
	 * Take the values from the form and turn it into a Citation, add it to citationlist.
	 * if form already has uuid, delete citation with that uuid from the list
	 * @param v the values from your form (should match the Citation type)
	 */
	function onFormSubmit(v: any) {
		// Ensure v matches citation format
		v as Citation;
		// if form already has uuid, delete citation with that uuid from the list
		// this happens when editing a citation (uuid comes in from initialValues)
		if (v.uuid) citationlist.removeCitationByUUID(v.uuid);

		citationlist.addCitation({
			...v,
			formattedString: formatters[$currentCitationFormat](v),
			uuid: crypto.randomUUID()
		});
		setShowFalse();
	}

	const formProps = {
		initialValues: initialValues,
		onSubmit: onFormSubmit
	};
</script>

<!-- Modal for more info about citation -->
<div class="modal modal-open">
	<div class="modal-box w-11/12 max-w-5xl">
		<div class="btn btn-sm btn-circle absolute right-2 top-2" on:click={setShowFalse}>✕</div>

		<h3 class="text-lg font-bold">More Info Modal</h3>

		<Form {...formProps} class="p-5">
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

			<br class="my-5" />
			<label for="date-cited"> Date Cited: </label>
			<Field name="date-cited" type="date">

			</Field>

			<div class="modal-action">
				<button class="btn btn-primary btn-square" type="submit"> ✓ </button>
			</div>
		</Form>
	</div>
</div>
