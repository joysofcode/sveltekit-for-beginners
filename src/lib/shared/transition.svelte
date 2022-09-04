<script lang="ts">
	import { fly } from 'svelte/transition'

	export let key: string
	export let duration: number
</script>

{#key key}
	<div
		in:fly={{ y: -50, duration, delay: duration }}
		out:fly={{ y: 50, duration }}
	>
		<slot />
	</div>
{/key}
