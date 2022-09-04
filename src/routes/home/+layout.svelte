<script lang="ts">
	import { page } from '$app/stores'

	import Navigation from '$lib/shared/navigation.svelte'
	import Trending from '$lib/shared/trending.svelte'
	import Transition from '$lib/shared/transition.svelte'
</script>

<div class="container">
	<Navigation />
	<Transition url={$page.url}>
		<main class="feed">
			<slot />
		</main>
	</Transition>
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
