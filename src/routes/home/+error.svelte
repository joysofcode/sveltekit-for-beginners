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
		gap: var(--spacing-32);
		padding: var(--spacing-24) var(--spacing-32);
		place-items: center;
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
	}
</style>
