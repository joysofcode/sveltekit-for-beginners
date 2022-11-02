<script>
	import { fly } from 'svelte/transition'
</script>

<svelte:head>
	<title>Twittr</title>
</svelte:head>

<main
	class="container"
	in:fly={{ x: -100, duration: 250, delay: 300 }}
	out:fly={{ x: -100, duration: 250 }}
>
	<section class="hero">
		<h1 class="title">Twittr 🐦️</h1>
		<p class="text">Share your hot take with everyone.</p>
	</section>

	<section class="login">
		<a class="btn" href="/home">🔥 Share Your Hot Take</a>
	</section>
</main>

<style>
	.container {
		display: grid;
		height: 100vh;
	}

	.hero,
	.login {
		display: grid;
		place-content: center;
	}

	.hero {
		background-color: var(--blue-0);
		text-align: center;
	}

	.title {
		z-index: 2;
		font-size: var(--font-size-5);
	}

	.text {
		transform: rotate(2deg) translateY(-40%);
		z-index: 1;
		background: var(--black-1);
		padding: var(--size-2);
		font-weight: bold;
		font-size: var(--font-size-3);
	}

	@media (min-width: 1024px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
