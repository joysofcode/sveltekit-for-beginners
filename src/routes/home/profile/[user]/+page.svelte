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
		margin: 0 var(--size-2);
		border-radius: 50%;
		border: 4px solid var(--black-1);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		display: grid;
		gap: var(--size-2);
		margin-top: var(--size-2);
		padding: 0 var(--size-2);
	}

	.user {
		display: grid;
	}

	.name {
		font-size: var(--font-size-3);
		font-weight: 700;
		text-transform: capitalize;
	}

	.handle {
		color: var(--gray-1);
	}

	nav {
		display: flex;
		justify-content: center;
		margin-top: var(--size-4);
		border-bottom: 1px solid var(--gray-2);
	}

	a {
		padding: var(--size-2) var(--size-4);
		font-size: var(--font-size-1);
		color: var(--gray-1);
		border-bottom: 4px solid transparent;
		transition: all 0.2s;
	}

	a:hover {
		background-color: var(--black-3);
		border-bottom: 4px solid var(--blue-0);
	}

	.active {
		font-weight: 700;
		border-bottom: 4px solid var(--blue-0);
	}
</style>
