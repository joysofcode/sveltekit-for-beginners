<script lang="ts">
	import { enhance } from '$root/lib/form'

	let tweet = ''
	let maxCharacters = 140

	$: charactersLeft = maxCharacters - tweet.length
</script>

<div class="compose">
	<img src="/profile/matia/avatar.webp" alt="Avatar" />
	<form
		action="/home"
		method="post"
		autocomplete="off"
		use:enhance={{ result: ({ form }) => form.reset() }}
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
		gap: var(--spacing-16);
		padding: var(--spacing-16) var(--spacing-24);
		border-bottom: 1px solid var(--color-border-primary);
	}

	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	form {
		display: flex;
		align-items: center;
		gap: var(--spacing-16);
	}

	input {
		color: var(--color-text-primary);
		background-color: transparent;
	}

	button {
		min-width: 80px;
		font-size: var(--font-16);
		padding: var(--spacing-16);
	}

	.error {
		color: tomato;
	}
</style>
