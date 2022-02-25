<script lang="ts">
	import { page } from '$app/stores'
	import Navigation from '$root/components/navigation.svelte'

	$: path = $page.url.pathname
</script>

<div class="container">
	<Navigation />
	<main class="settings">
		<h1 class="title">Settings</h1>

		<section class="privacy">
			<h2>Privacy</h2>
			<a
				class:active={path ===
					'/home/settings/personalization'}
				href="/home/settings/personalization"
			>
				Personalization and data
			</a>
			<a
				class:active={path === '/home/settings/data'}
				href="/home/settings/data">Your Twitter data</a
			>
			<a
				class:active={path === '/home/settings/cookies'}
				href="/home/settings/cookies">Cookie preferences</a
			>
		</section>

		<section class="general">
			<h2>General</h2>
			<a
				class:active={path === '/home/settings/resources'}
				href="/home/settings/resources"
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
		height: 100vh;
		max-width: min-content;
		margin: 0 auto;
		display: grid;
		grid-template-columns: min-content 50ch;
	}

	.settings {
		display: grid;
		grid-auto-rows: min-content;
		gap: var(--spacing-24);
		border: 1px solid var(--color-border-primary);
		border-top: none;
		border-bottom: none;
	}

	.privacy,
	.general {
		display: grid;
	}

	h1 {
		font-size: var(--font-18);
		margin-top: var(--spacing-24);
		padding: 0 var(--spacing-16);
	}

	h2 {
		font-size: var(--font-24);
		padding: 0 var(--spacing-16);
	}

	h2 {
		margin-bottom: var(--spacing-16);
	}

	a {
		padding: 1.4rem var(--spacing-16);
	}

	.active {
		background: var(--color-link-hover);
	}

	aside {
		display: none;
		padding: var(--spacing-16);
	}

	@media (min-width: 1024px) {
		.container {
			max-width: 1240px;
			margin: 0 auto;
			grid-template-columns: 1fr 50ch 1fr;
		}

		aside {
			/* forgive me father, I'm lazy */
			width: 400px;
			display: block;
		}
	}
</style>
