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
		padding: 2rem;
		gap: var(--size-3);
		border: 1px solid var(--gray-2);
		border-radius: var(--radius-1);
		background-color: var(--black-2);
	}

	h2 {
		font-size: var(--font-size-2);
	}

	a {
		color: hsl(204, 88%, 53%);
		font-size: var(--font-size-1);
	}

	@media (min-width: 1024px) {
		.container {
			display: flex;
			flex-direction: column;
			width: 400px;
			margin-top: var(--size-2);
			padding: 0 var(--size-4);
			gap: var(--size-2);
		}
	}
</style>
