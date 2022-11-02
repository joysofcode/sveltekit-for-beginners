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
		gap: var(--size-3);
		padding: 2rem;
		background-color: var(--black-2);
		border: 1px solid var(--gray-2);
		border-radius: var(--radius-1);
	}

	h2 {
		font-size: var(--font-size-2);
	}

	a {
		font-size: var(--font-size-1);
		color: hsl(204, 88%, 53%);
	}

	@media (min-width: 1024px) {
		.container {
			width: 400px;
			display: flex;
			flex-direction: column;
			gap: var(--size-2);
			margin-top: var(--size-2);
			padding: 0 var(--size-4);
		}
	}
</style>
