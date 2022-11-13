<!--
  Handles the select for the citation format
-->
<script>
	import { currentCitationFormat } from '$lib/stores';
</script>

<div>
	<!-- This is the select for the citation format store -->
	<select
		name="citationStyleSelect"
		bind:value={$currentCitationFormat}
		class="select select-bordered mr-1"
	>
		<option value="mla" label="MLA" selected />
		<option value="apa" label="APA" />
		<option value="chicago" label="Chicago" />
	</select>
	<label for="citationStyleSelect" class="label">
		<span class="label-text text-xs">Citation Style</span>
	</label>
</div>
