<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container">
	<h1>About</h1>
	<div class="content">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Voluptatibus eveniet quos impedit cumque,
			deleniti aspernatur atque vitae iusto ratione nam qui.
		</p>
	</div>
</div>

<style>
	h1 {
		font-size: var(--font-size-3);
	}

	p {
		color: var(--gray-1);
	}

	.container {
		display: grid;
		gap: var(--size-1);
		padding: var(--size-2);
	}

	.content {
		display: grid;
		gap: var(--size-2);
	}
</style>
