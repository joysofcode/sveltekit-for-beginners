<script lang="ts">
	import { page } from '$app/stores'
	import Navigation from '$lib/shared/navigation.svelte'

	const base = '/home/settings'

	$: path = $page.url.pathname
</script>

<div class="container">
	<Navigation />
	<main class="settings">
		<h1 class="title">Settings</h1>

		<section class="privacy">
			<h2>Privacy</h2>

			<a
				class:active={path === `${base}/personalization`}
				href="{base}/personalization"
			>
				Personalization and data
			</a>

			<a
				class:active={path === `${base}/data`}
				href="{base}/data"
			>
				Your Twitter data
			</a>

			<a
				class:active={path === `${base}/cookies`}
				href="{base}/cookies"
			>
				Cookie preferences
			</a>
		</section>

		<section class="general">
			<h2>General</h2>
			<a
				class:active={path === `${base}/resources`}
				href="{base}/resources"
			>
				Additional resources
			</a>
		</section>
	</main>
	<aside>
		<slot />
	</aside>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: min-content 50ch;
		margin: 0 auto;
		max-width: min-content;
		height: 100vh;
	}

	.settings {
		display: grid;
		grid-auto-rows: min-content;
		gap: var(--size-3);
		border: 1px solid var(--gray-2);
		border-top: none;
		border-bottom: none;
	}

	.privacy,
	.general {
		display: grid;
	}

	h1 {
		margin-top: var(--size-3);
		padding: 0 var(--size-2);
		font-size: var(--font-size-2);
	}

	h2 {
		padding: 0 var(--size-2);
		font-size: var(--font-size-3);
	}

	h2 {
		margin-bottom: var(--size-2);
	}

	a {
		padding: 1.4rem var(--size-2);
	}

	.active {
		background: var(--black-3);
	}

	aside {
		display: none;
		padding: var(--size-2);
	}

	@media (min-width: 1024px) {
		.container {
			grid-template-columns: 1fr 50ch 1fr;
			margin: 0 auto;
			max-width: 1240px;
		}

		aside {
			display: block;
			width: 400px;
		}
	}
</style>
