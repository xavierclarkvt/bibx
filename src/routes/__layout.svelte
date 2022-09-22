<!--
    Navbar/topbar/footer file. The content in this file ends up on the top of of all other content.
    For more info see: https://kit.svelte.dev/docs/layouts
    @author Xavier Clark (2022)
-->
<script lang="ts">
	import '../app.css'; //for all tailwind classes
	import ThemeToggle from '$lib/comps/ThemeToggle.svelte';
</script>

<div class="flex flex-col h-screen">
	<div class="navbar bg-base text-primary-content">
		<div class="navbar-start" />
		<div class="navbar-center" />
		<div class="navbar-end">
			<ThemeToggle />
		</div>
	</div>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="footer footer-center p-4 bg-secondary text-base-content">
		<div class="flex">
			<a href="/about" class="link">About</a>
			&bull;
			<a href="/support" class="link">Support Further Development</a>
			&bull;
			<a href="https://www.github.com/xavierclarkvt/bibx" class="link">Source (Github)</a>
			&bull;
			<p>Live Free or Die</p>
		</div>
	</footer>
</div>
