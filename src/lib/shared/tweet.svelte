<script lang="ts">
	import { fade, fly } from 'svelte/transition'
	import { enhance } from '$app/forms'

	import Icon from '$lib/shared/icon.svelte'
	import type { TweetType } from '$lib/types'

	export let tweet: TweetType
</script>

<article class="tweet-container" transition:fade>
	<a class="avatar" href="/home/profile/{tweet.name}">
		<img
			width="140"
			height="140"
			src={tweet.avatar}
			alt={tweet.name}
		/>
	</a>

	<div class="tweet-details">
		<div>
			<a href="/home/profile/{tweet.name}" class="user">
				{tweet.name}
			</a>
			<span class="handle">{tweet.handle}</span>
			<span class="posted"> · {tweet.posted}</span>
		</div>

		<div class="tweet">
			<div class="content">
				{tweet.content}
			</div>

			<div class="actions">
				<form
					action="?/likeTweet"
					method="post"
					use:enhance
				>
					<input type="hidden" name="id" value={tweet.id} />
					<button
						class="btn like"
						title="Like"
						type="submit"
					>
						<div class="circle">
							<Icon
								width="24"
								height="24"
								name="like"
								class={tweet.liked ? 'liked' : ''}
							/>
						</div>
						<span class="count">
							{#key tweet.likes}
								{#if tweet.likes}
									<div
										in:fly={{ y: 40 }}
										out:fly={{ y: 40 }}
									>
										{tweet.likes}
									</div>
								{/if}
							{/key}
						</span>
					</button>
				</form>

				<a
					href="/home/profile/{tweet.name}/status/{tweet.url}"
					class="permalink"
					title="Permalink"
				>
					<div class="circle">
						<Icon width="24" height="24" name="permalink" />
					</div>
				</a>

				<form
					action="?/deleteTweet"
					method="post"
					use:enhance
				>
					<input type="hidden" name="id" value={tweet.id} />
					<button
						aria-label="Remove tweet"
						class="btn remove"
						title="Remove"
						type="submit"
					>
						<div class="circle">
							<Icon width="24" height="24" name="remove" />
						</div>
					</button>
				</form>
			</div>
		</div>
	</div>
</article>

<style>
	.avatar {
		align-self: start;
	}

	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	button {
		font-size: var(--font-size-1);
		padding: var(--size-2);
	}

	.tweet-container:hover {
		background-color: var(--black-2);
	}

	.tweet-container {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: var(--size-2);
		padding: var(--size-2) var(--size-3);
		transition: all 0.3s;
	}

	.tweet-container:not(:last-child) {
		border-bottom: 1px solid var(--gray-2);
	}

	.tweet-details {
		display: grid;
		gap: var(--size-1);
	}

	.user {
		font-weight: 700;
		text-transform: capitalize;
	}

	.user:hover {
		text-decoration: underline;
	}

	.handle,
	.posted {
		font-size: var(--font-size-1);
		color: var(--gray-1);
	}

	.content {
		font-size: var(--font-size-1);
	}

	.actions {
		display: flex;
		gap: var(--size-4);
		margin-top: var(--size-2);
	}

	.actions button,
	.actions a {
		padding: 0;
		color: var(--gray-1);
		background: none;
		transition: all 0.3s;
	}

	.circle {
		width: 24px;
		height: 24px;
		display: grid;
		place-content: center;
		padding: var(--size-2);
		border-radius: 50%;
		transition: all 0.3s;
	}

	.circle > :global(.liked) {
		color: hsl(9 100% 64%);
		fill: hsl(9 100% 64%);
	}

	.like {
		display: flex;
		align-items: center;
	}

	.like:hover {
		color: hsl(9 100% 64%);
	}

	.like:hover .circle {
		background: hsla(9 100% 64% / 10%);
	}

	.permalink:hover {
		color: hsl(120 100% 40%);
	}

	.permalink:hover .circle {
		background-color: hsla(120 100% 50% / 4%);
	}

	.remove:hover {
		color: hsl(0 100% 50%);
	}

	.remove:hover .circle {
		background-color: hsla(0 100% 50% / 4%);
	}

	.like,
	.remove,
	.permalink {
		width: 80px;
	}

	.count {
		margin-left: var(--size-2);
		font-size: 1.4rem;
		font-weight: 400;
		overflow: hidden;
	}
</style>
