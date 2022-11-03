<script lang="ts">
	import Tweet from '$lib/shared/tweet.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<svelte:head>
	<title>
		{data.profile.name} ({data.profile.handle})
	</title>
</svelte:head>

<div class="profile">
	<img
		class="banner"
		src="/profile/{data.profile.name}/banner.webp"
		alt="Profile banner"
	/>
	<img
		class="avatar"
		src={data.profile.avatar}
		alt={data.profile.name}
	/>
</div>

<div class="content">
	<div class="user">
		<span class="name">{data.profile.name}</span>
		<span class="handle">{data.profile.handle}</span>
	</div>
	<div class="about">
		<span>{data.profile.about}</span>
	</div>
</div>

<nav>
	<a href="/" class="active">Tweets</a>
	<a href="/">Tweets & replies</a>
	<a href="/">Media</a>
	<a href="/">Likes</a>
</nav>

{#each data.tweets as tweet (tweet.id)}
	<Tweet {tweet} />
{/each}

<style>
	.profile {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 200px 60px;
	}

	.banner {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
	}

	.avatar {
		grid-column: 1 / 2;
		grid-row: 1 / -1;
		place-self: center;
		align-self: flex-end;
		width: 120px;
		height: 120px;
		margin: 0 var(--spacing-16);
		border-radius: 50%;
		border: 4px solid var(--color-bg-primary);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		display: grid;
		gap: var(--spacing-16);
		margin-top: var(--spacing-16);
		padding: 0 var(--spacing-16);
	}

	.user {
		display: grid;
	}

	.name {
		font-size: var(--font-24);
		font-weight: 700;
		text-transform: capitalize;
	}

	.handle {
		color: var(--color-text-muted);
	}

	nav {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-32);
		border-bottom: 1px solid var(--color-border-primary);
	}

	a {
		padding: var(--spacing-16) var(--spacing-32);
		font-size: var(--font-16);
		color: var(--color-text-muted);
		border-bottom: 4px solid transparent;
		transition: all 0.2s;
	}

	a:hover {
		background-color: var(--color-link-hover);
		border-bottom: 4px solid var(--color-brand);
	}

	.active {
		font-weight: 700;
		border-bottom: 4px solid var(--color-brand);
	}
</style>
