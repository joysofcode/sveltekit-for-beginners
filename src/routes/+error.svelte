<script>
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1>{$page.status}: {$page.error.message}</h1>
	<img src="/error.webp" alt="Surprised cat" />
</div>

<style>
	.error {
		display: grid;
		place-content: center;
		place-items: center;
		gap: var(--size-4);
		height: 100vh;
	}

	img {
		border-radius: 50%;
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
</style>
