<script lang="ts">
	import { page } from '$app/stores'

	import Navigation from '$root/components/navigation.svelte'
	import Trending from '$root/components/trending.svelte'
	import Transition from '$root/components/transition.svelte'
</script>

<div class="container">
	<Navigation />
	<main class="feed">
		<Transition url={$page.url}>
			<slot />
		</Transition>
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
