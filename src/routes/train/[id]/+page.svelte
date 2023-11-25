<script lang="ts">
	import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte';
	import HeaderMenu from '$lib/components/menu/HeaderMenu.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="max-w-md py-3 px-5 space-y-3">
	<HeaderMenu />
	<Button on:click={(e) => {
		location.href = "/";
	}} variant="link" class="h-8 p-0 flex items-center">
		<div class="mr-2"><ArrowLeft /></div>
		Zurück
	</Button>

	<h1 class="text-2xl font-semibold w-full overflow-hidden">{data.collection.name}</h1>
</div>
