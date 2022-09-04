<script lang="ts">
	import Compose from '$lib/shared/compose.svelte'
	import Tweet from '$lib/shared/tweet.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Feed</h1>

<Compose />

{#each data.tweets as tweet (tweet.id)}
	<Tweet {tweet} />
{/each}

<style>
	h1 {
		position: sticky;
		top: 0;
		padding: var(--spacing-8) var(--spacing-24);
		font-size: var(--font-24);
		backdrop-filter: blur(100px);
	}
</style>
