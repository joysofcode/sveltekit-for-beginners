<script lang="ts">
	import { page } from '$app/stores'
	import Icon from '$root/components/icon.svelte'

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
					<a href="/home" sveltekit:prefetch>
						<Icon width="32" height="32" name="home" />
						<span>Home</span>
					</a>
				</li>
				<li class:active={path === '/home/profile/matia'}>
					<a href="/home/profile/matia" sveltekit:prefetch>
						<Icon width="32" height="32" name="profile" />
						<span>Profile</span>
					</a>
				</li>
				<li class:active={path === '/home/settings'}>
					<a href="/home/settings" sveltekit:prefetch>
						<Icon width="32" height="32" name="settings" />
						<span>Settings</span>
					</a>
				</li>
				<li class:active={path === '/home/about'}>
					<a href="/home/about" sveltekit:prefetch>
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
		gap: var(--spacing-8);
		font-size: var(--font-18);
	}

	li a {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-16);
		padding: 1.4rem;
		border-radius: var(--radius-base);
		transition: all 0.2s ease;
	}

	li a:hover {
		background-color: var(--color-link-hover);
	}

	li.active {
		font-weight: 700;
	}

	.logo {
		font-size: var(--font-32);
	}

	span {
		display: none;
	}

	.tweet {
		display: none;
		text-align: center;
	}

	.tweet:hover {
		background-color: var(--color-btn-primary-active-hover);
	}

	@media (min-width: 1024px) {
		aside {
			padding: 0 var(--spacing-32);
		}

		span {
			display: block;
		}

		.tweet {
			width: 100%;
			display: block;
			margin-top: var(--spacing-16);
		}
	}
</style>
