<script lang="ts">
	import Tweet from '$lib/shared/tweet.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	const name = data.tweet.name
	const content = data.tweet.content.slice(0, 60)
</script>

<svelte:head>
	<title>{name} on Twittr: "{content}..."</title>
</svelte:head>

<Tweet tweet={data.tweet} />
