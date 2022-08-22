<!--
    Navbar/topbar file. The content in this file ends up on the top of of all other content.
    For more info see: https://kit.svelte.dev/docs/layouts
    @author Xavier Clark (2022)
-->
<script lang="ts">
	import '../app.css'; //for all tailwind classes
	import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<div class="navbar bg-primary text-primary-content">
	<div class="navbar-start" />
	<div class="navbar-center">
		<h1 class="text-4xl font-serif">BibX</h1>
	</div>
	<div class="navbar-end">
		<img class="w-5 h-5 mx-1" src="icons/sun.svg" alt="sun icon" />
		<ThemeToggle />
		<img class="w-5 h-5 mx-1" src="icons/moon.svg" alt="moon icon" />
	</div>
</div>

<slot />
