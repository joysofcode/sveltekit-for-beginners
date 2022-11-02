<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import { enhance } from '$app/forms'

	let tweet = ''
	let maxCharacters = 140

	$: charactersLeft = maxCharacters - tweet.length
</script>

<div class="compose">
	<img src="/profile/matia/avatar.webp" alt="Avatar" />
	<form
		action="?/createTweet"
		method="POST"
		autocomplete="off"
		use:enhance={({ form }) => {
			invalidateAll()
			return async () => {
				form.reset()
			}
		}}
	>
		<input
			aria-label="Enter your Tweet"
			bind:value={tweet}
			name="tweet"
			placeholder="What's your hot take?"
			type="text"
		/>
		<button
			class="btn"
			class:error={charactersLeft < 0}
			disabled={charactersLeft <= 0}
			type="submit"
		>
			{charactersLeft === maxCharacters
				? 'Tweet'
				: charactersLeft}
		</button>
	</form>
</div>

<style>
	.compose {
		display: grid;
		grid-template-columns: min-content 1fr;
		align-items: center;
		gap: var(--size-2);
		padding: var(--size-2) var(--size-3);
		border-bottom: 1px solid var(--gray-2);
	}

	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	form {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}

	input {
		color: var(--white-0);
		background-color: transparent;
	}

	button {
		min-width: 80px;
		font-size: var(--font-size-1);
		padding: var(--size-2);
	}

	.error {
		color: tomato;
	}
</style>
