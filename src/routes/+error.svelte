<script>
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<img src="/error.webp" alt="Surprised cat" />
</div>

<style>
	.error {
		display: grid;
		place-content: center;
		place-items: center;
		height: 100vh;
		gap: var(--size-4);
	}

	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
