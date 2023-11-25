<script lang="ts">
	import Logo from '../icons/Logo.svelte';
	import Settings from '../icons/Settings.svelte';
	import Button from '../ui/button/button.svelte';
</script>

<div class="flex w-full border-b pb-2 justify-between h-10 items-center">
	<a href="/">
		<div class="h-6 w-6 cursor-pointer flex items-center justify-center">
			<Logo />
		</div>
	</a>

	<a href="/settings">
		<div class="flex w-6 h-6 cursor-pointer items-center justify-center">
			<Settings />
		</div>
	</a>
</div>
