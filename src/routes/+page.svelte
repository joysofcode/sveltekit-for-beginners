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
		height: 100vh;
		display: grid;
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
		font-size: var(--font-size-5);
		z-index: 2;
	}

	.text {
		padding: var(--size-2);
		transform: rotate(2deg) translateY(-40%);
		background: var(--black-1);
		font-weight: bold;
		font-size: var(--font-size-3);
		z-index: 1;
	}

	@media (min-width: 1024px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
