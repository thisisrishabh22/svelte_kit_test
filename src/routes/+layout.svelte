<script>
	import "../app.css";
</script>

<div class="app min-h-screen bg-olive-one p-0 selection:bg-green-two md:pt-24 pb-10 md:px-8">

	<main>
		<slot />
	</main>

	<footer class="mt-24 flex justify-center text-md font-light">
		<p class="text-gray-three">Developed by <a class="hover:text-green-six" href="https://geeekgod.ml" target="_blank" rel="noopener noreferrer">Rishabh Singh</a> using <a class="hover:text-green-six" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a></p>
	</footer>
</div>
