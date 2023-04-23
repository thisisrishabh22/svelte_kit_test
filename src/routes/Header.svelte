<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

</header>
