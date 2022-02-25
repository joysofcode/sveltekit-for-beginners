<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit'

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		}
	}
</script>

<script lang="ts">
	export let title: string
</script>

<div class="error">
	<h1>{title}</h1>
	<img src="/error.webp" alt="Surprised cat" />
</div>

<style>
	.error {
		height: 100vh;
		display: grid;
		gap: var(--spacing-32);
		place-content: center;
		place-items: center;
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
	}
</style>
