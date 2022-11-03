<script lang="ts">
	import { page } from '$app/stores'
	import Icon from '$lib/shared/icon.svelte'

	$: path = $page.url.pathname
</script>

<aside>
	<div class="container">
		<nav>
			<ul>
				<li>
					<a href="/" class="logo">🐦️</a>
				</li>
				<li class:active={path === '/home'}>
					<a href="/home" data-sveltekit-prefetch>
						<Icon width="32" height="32" name="home" />
						<span>Home</span>
					</a>
				</li>
				<li class:active={path === '/home/profile/matia'}>
					<a
						href="/home/profile/matia"
						data-sveltekit-prefetch
					>
						<Icon width="32" height="32" name="profile" />
						<span>Profile</span>
					</a>
				</li>
				<li class:active={path === '/home/settings'}>
					<a href="/home/settings" data-sveltekit-prefetch>
						<Icon width="32" height="32" name="settings" />
						<span>Settings</span>
					</a>
				</li>
				<li class:active={path === '/home/about'}>
					<a href="/home/about" data-sveltekit-prefetch>
						<Icon width="32" height="32" name="about" />
						<span>About</span>
					</a>
				</li>
			</ul>
		</nav>

		<button class="btn tweet">Tweet</button>
	</div>
</aside>

<style>
	.container {
		position: sticky;
		top: 0;
	}

	ul {
		display: grid;
		gap: var(--size-1);
		font-size: var(--font-size-2);
	}

	li a {
		display: inline-flex;
		align-items: center;
		padding: 1.4rem;
		gap: var(--size-2);
		border-radius: var(--radius-1);
		transition: all 0.2s ease;
	}

	li a:hover {
		background-color: var(--black-3);
	}

	li.active {
		font-weight: 700;
	}

	.logo {
		font-size: var(--font-size-4);
	}

	span {
		display: none;
	}

	.tweet {
		display: none;
		text-align: center;
	}

	.tweet:hover {
		background-color: var(--blue-1);
	}

	@media (min-width: 1024px) {
		aside {
			padding: 0 var(--size-4);
		}

		span {
			display: block;
		}

		.tweet {
			display: block;
			width: 100%;
			margin-top: var(--size-2);
		}
	}
</style>
