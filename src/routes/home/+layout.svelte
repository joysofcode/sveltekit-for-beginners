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
		height: 100vh;
		max-width: min-content;
		margin: 0 auto;
		display: grid;
		grid-template-columns: min-content 50ch;
	}

	.feed {
		border: 1px solid var(--color-border-primary);
		border-top: none;
		border-bottom: none;
	}

	@media (min-width: 1024px) {
		.container {
			max-width: 1240px;
			margin: 0 auto;
			grid-template-columns: 1fr 50ch 1fr;
		}
	}
</style>
