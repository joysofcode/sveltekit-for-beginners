<script>
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<img src="/dancing.webp" alt="Person dancing" />
</div>

<style>
	.error {
		display: grid;
		place-items: center;
		padding: var(--size-3) var(--size-4);
		gap: var(--size-4);
	}

	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
