<!-- 
  The handles the creation of citations and adding them to the citationList store
  Each citation needs to follow the Citation object

  TODO: change wording of fields based on type selected, remove those which don't apply. 
  also add tooltip text
-->
<script type="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Form, Field, Select } from 'svelte-forms-lib';
	import { citationlist, currentCitationFormat } from '$lib/stores';
	import { formatters } from '$lib/formatters';
	import type { Citation } from '$lib/types';
	import { object_without_properties } from 'svelte/internal';

	export let initialValues = {};
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

	setInterval(() => console.log(JSON.stringify(formProps, null, 2)), 5000);
</script>

<!-- Modal for more info about citation -->
<div transition:fade class="modal modal-open">
	<div class="modal-box w-11/12 max-w-5xl">
		<div class="btn btn-sm btn-circle absolute right-2 top-2" on:click={setShowFalse}>✕</div>

		<h3 class="text-lg font-bold">We need a little more info:</h3>

		<Form {...formProps} class="p-5">
			<ul class="grid grid-cols-2 gap-4">
				<li class="flex flex-row items-center space-x-1">
					<svg class="basis-1/12 inline w-6 h-6 fill-primary">
						<use href="icons/star.svg#icon" />
					</svg>
					<label for="type" class="align-text-bottom">Type: </label>
					<Select name="type" class="justify-self-start select select-bordered">
						<option>Article</option>
						<option>Book</option>
						<option>Website</option>
					</Select>
					<div class="basis-3" />
				</li>

				<!-- to put type on own line -->
				<div />

				<!-- TODO: MAKE LIKE https://svelte-forms-lib-sapper-docs.vercel.app/array -->
				<li class="flex flex-row items-center space-x-1">
					<svg class="basis-1/12 inline w-6 h-6 fill-primary">
						<use href="icons/star.svg#icon" />
					</svg>
					<label for="author_first">Author First: </label>
					<Field name="author_first" class="input input-bordered grow" />
					<div class="basis-4" />
				</li>

				<li class="flex flex-row items-center space-x-1">
					<div class="basis-1/12" />
					<label for="author_last">Last: </label>
					<Field name="author_last" class="input input-bordered grow" />
					<div class="basis-4" />
				</li>

				<li class="flex flex-row items-center space-x-1">
					<svg class="basis-1/12 inline w-6 h-6 fill-primary">
						<use href="icons/star.svg#icon" />
					</svg>
					<label for="title">Title of Source: </label>
					<Field name="title" class="input input-bordered grow" />
					<div class="basis-2 tooltip tooltip-info tooltip-right" data-tip="TODO:">
						<svg class="w-4 h-4 fill-current">
							<use href="icons/circle-info.svg#icon" />
						</svg>
					</div>
				</li>

				<li class="flex flex-row items-center space-x-1">
					<div class="basis-1/12" />
					<label for="version"> Version: </label>
					<Field name="version" class="input input-bordered grow" />
					<div class="basis-2 tooltip tooltip-info tooltip-left" data-tip="TODO:">
						<svg class="w-4 h-4 fill-current">
							<use href="icons/circle-info.svg#icon" />
						</svg>
					</div>
				</li>

				<li class="flex flex-row items-center space-x-1">
					<div class="basis-1/12" />
					<label for="number"> Number: </label>
					<Field name="number" class="input input-bordered grow" />
					<div class="basis-2 tooltip tooltip-info tooltip-right" data-tip="TODO:">
						<svg class="w-4 h-4 fill-current">
							<use href="icons/circle-info.svg#icon" />
						</svg>
					</div>
				</li>

				<li class="flex flex-row items-center space-x-1">
					<svg class="basis-1/12 inline w-6 h-6 fill-primary">
						<use href="icons/star.svg#icon" />
					</svg>
					<label for="publisher"> Publisher: </label>
					<Field name="publisher" class="input input-bordered grow" />
					<div class="basis-2 tooltip tooltip-info tooltip-left " data-tip="TODO:">
						<svg class="w-4 h-4 fill-current">
							<use href="icons/circle-info.svg#icon" />
						</svg>
					</div>
				</li>

				<li class="flex flex-row items-center space-x-1">
					<svg class="basis-1/12 inline w-6 h-6 fill-primary">
						<use href="icons/star.svg#icon" />
					</svg>
					<label for="location">Location: </label>
					<Field name="location" class="input input-bordered grow" />
					<div
						class="basis-2 tooltip tooltip-info tooltip-left"
						data-tip="You should be as specific as possible in identifying a work's location. 
            e.g. Page number(s), URL(s), place of location (for phsyical objects encountered firsthand)."
					>
						<svg class="w-4 h-4 fill-current">
							<use href="icons/circle-info.svg#icon" />
						</svg>
					</div>
				</li>

				<li class="flex flex-row items-center space-x-1">
					<div class="basis-1/12" />
					<label for="container_title">Title of Container: </label>
					<Field name="container_title" class="input input-bordered grow" />
					<div class="basis-2 tooltip tooltip-info tooltip-right" data-tip="TODO:">
						<svg class="w-4 h-4 fill-current">
							<use href="icons/circle-info.svg#icon" />
						</svg>
					</div>
				</li>

				<li class="flex flex-row items-center space-x-1">
					<div class="basis-1/12" />
					<label for="misc_contr">Other Contributors: </label>
					<Field name="misc_contr" class="input input-bordered grow" />
					<div class="basis-2 tooltip tooltip-info tooltip-left" data-tip="TODO:">
						<svg class="w-4 h-4 fill-current">
							<use href="icons/circle-info.svg#icon" />
						</svg>
					</div>
				</li>

				<li class="flex flex-row items-center space-x-1">
					<svg class="basis-1/12 inline w-6 h-6 fill-primary">
						<use href="icons/star.svg#icon" />
					</svg>
					<label for="pub_date">Publication Date: </label>
					<Field name="pub_date" type="date" class="input input-bordered grow" />
					<div class="basis-4" />
				</li>

				<li class="flex flex-row items-center space-x-1">
					<svg class="basis-1/12 inline w-6 h-6 fill-primary">
						<use href="icons/star.svg#icon" />
					</svg>
					<label for="accessed_date">Accessed Date: </label>
					<Field name="accessed_date" type="date" class="input input-bordered grow" />
					<div class="basis-4" />
				</li>
			</ul>

			<p class="text-sm absolute left-4 bottom-10">
				<svg class="basis-2 inline w-6 h-6 fill-primary">
					<use href="icons/star.svg#icon" />
				</svg>
				: Recommended Field. Most citations will need this attribute.
			</p>
			<div class="modal-action">
				<button class="btn btn-primary btn-square" type="submit"> ✓ </button>
			</div>
		</Form>
	</div>
</div>
