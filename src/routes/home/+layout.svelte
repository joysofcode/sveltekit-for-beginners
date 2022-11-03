<script lang="ts">
	import Navigation from '$lib/shared/navigation.svelte'
	import Trending from '$lib/shared/trending.svelte'
	import PageTransition from '$lib/shared/transition.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="container">
	<Navigation />
	<main class="feed">
		<PageTransition key={data.url} duration={300}>
			<slot />
		</PageTransition>
	</main>
	<Trending />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: min-content 50ch;
		max-width: min-content;
		height: 100vh;
		margin: 0 auto;
	}

	.feed {
		border: 1px solid var(--gray-2);
		border-top: none;
		border-bottom: none;
	}

	@media (min-width: 1024px) {
		.container {
			grid-template-columns: 1fr 50ch 1fr;
			max-width: 1240px;
			margin: 0 auto;
		}
	}
</style>
