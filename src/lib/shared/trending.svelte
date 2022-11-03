<aside>
	<div class="container">
		<div class="placeholder" />

		<section>
			<h2>Trends for you</h2>
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<a href="/">Show more</a>
		</section>

		<section>
			<h2>Who to follow</h2>
			<div class="placeholder" />
			<div class="placeholder" />
			<a href="/">Show more</a>
		</section>
	</div>
</aside>

<style>
	.container {
		display: none;
		position: sticky;
		top: 0;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-24);
		padding: 2rem;
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-base);
	}

	h2 {
		font-size: var(--font-18);
	}

	a {
		font-size: var(--font-16);
		color: hsl(204, 88%, 53%);
	}

	@media (min-width: 1024px) {
		.container {
			width: 400px;
			display: flex;
			flex-direction: column;
			gap: var(--spacing-16);
			margin-top: var(--spacing-16);
			padding: 0 var(--spacing-32);
		}
	}
</style>
