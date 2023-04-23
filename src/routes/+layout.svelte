<script>
	import Header from './Header.svelte';
	import "../app.css";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Developed by <a href="https://geeekgod.ml" target="_blank" rel="noopener noreferrer">Rishabh Singh</a> using <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a></p>
	</footer>
</div>
