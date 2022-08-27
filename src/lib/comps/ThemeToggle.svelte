<!--
  sets theme to light or dark mode based on checked status of a toggle
  also sets the theme saved in localStorage on refresh via onMount
  If changing theme(s), also need to change default theme in src/app.html
-->
<script type="ts">
	import { onMount } from 'svelte';

	let themes: { light: string; dark: string } = { light: 'bumblebee', dark: 'halloween' };
	let themeIsDark: boolean = false;

	// find theme stored in localstorage, set theme accordingly
	onMount(() => {
		let theme = localStorage.getItem('theme') ?? themes['light'];
		themeIsDark = theme === themes['dark'];
		document.documentElement.setAttribute('data-theme', theme);
	});

	/**
	 * change the theme when toggle is clicked
	 * save current theme to localhost aswell
	 * @param e the event that triggers it
	 */
	function onClick(e: Event): void {
		// if the toggle has become checked, make theme dark, else make theme light
		let newTheme = (e?.target as HTMLInputElement)?.checked ? themes['dark'] : themes['light'];
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	}
</script>

<!-- sun icon -->
<svg class="w-5 h-5 mx-2 fill-secondary">
	<use href="icons/sun.svg#icon" />
</svg>
<input id="themetoggle" type="checkbox" class="toggle" checked={themeIsDark} on:click={onClick} />
<!-- moon icon -->
<svg class="w-5 h-5 mx-2 fill-secondary">
	<use href="icons/moon.svg#icon" />
</svg>
