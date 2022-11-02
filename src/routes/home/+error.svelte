<script>
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1>{$page.status}: {$page.error.message}</h1>
	<img src="/dancing.webp" alt="Person dancing" />
</div>

<style>
	.error {
		display: grid;
		place-items: center;
		gap: var(--size-4);
		padding: var(--size-3) var(--size-4);
	}

	img {
		border-radius: 50%;
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
</style>
