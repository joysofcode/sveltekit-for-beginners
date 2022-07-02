<script lang="ts">
	import type { User } from '@prisma/client'

	import Tweet from '$root/components/tweet.svelte'
	import type { TweetType } from '$root/types'

	export let profile: User
	export let tweets: TweetType[]
</script>

<svelte:head>
	<title>{profile.name} ({profile.handle})</title>
</svelte:head>

<div class="profile">
	<img
		class="banner"
		src="/profile/{profile.name}/banner.webp"
		alt="Profile banner"
	/>
	<img
		class="avatar"
		src={profile.avatar}
		alt={profile.name}
	/>
</div>

<div class="content">
	<div class="user">
		<span class="name">{profile.name}</span>
		<span class="handle">{profile.handle}</span>
	</div>
	<div class="about">
		<span>{profile.about}</span>
	</div>
</div>

<nav>
	<a href="/" class="active">Tweets</a>
	<a href="/">Tweets & replies</a>
	<a href="/">Media</a>
	<a href="/">Likes</a>
</nav>

{#each tweets as tweet (tweet.id)}
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
