<script lang="ts">
	import ArchiveIcon from '$lib/components/icons/ArchiveIcon.svelte';
	import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/components/icons/ArrowRight.svelte';
	import ArrowTopRight from '$lib/components/icons/ArrowTopRight.svelte';
	import FlashIcon from '$lib/components/icons/FlashIcon.svelte';
	import ShapesIcon from '$lib/components/icons/ShapesIcon.svelte';
	import TimerIcon from '$lib/components/icons/TimerIcon.svelte';
	import HeaderMenu from '$lib/components/menu/HeaderMenu.svelte';
	import Footer from '$lib/components/menu/footer.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="max-w-md py-3 px-5 space-y-3">
	<HeaderMenu />
	<Button
		on:click={(e) => {
			location.href = '/';
		}}
		variant="link"
		class="h-8 p-0 flex items-center"
	>
		<div class="mr-2"><ArrowLeft /></div>
		Zurück
	</Button>

	<h1 class="text-2xl font-semibold w-full overflow-hidden">{data.collection.name}</h1>

	<div class="w-full h-40 border rounded border-[#DA627D] flex items-center justify-center">
		<div class="text-2xl font-normal  text-[#DA627D]">to strengthen</div>
	</div>
	<div class="w-full flex justify-center">
		<div class="w-24 flex items-center justify-between">
			<Button size="sm" class="p-0 w-6 h-6" variant="ghost"><ArrowLeft /></Button>
			<div class="tracking-widest">1/{data.collection.card_ids.length}</div>
			<Button size="sm" class="p-0 w-6 h-6" variant="ghost"><ArrowRight /></Button>
		</div>
	</div>

	<div
		class="w-full h-16 p-4 bg-white rounded-md shadow border border-gray-500 justify-start items-center gap-3 inline-flex"
	>
		<div class="w-6 h-6 justify-center items-center flex">
			<ArchiveIcon />
		</div>
		<div class="text-black text-lg font-medium leading-tight">Karteikarten</div>
	</div>
	<div
		class="w-full h-16 p-4 bg-white rounded-md shadow border border-gray-500 justify-start items-center gap-3 inline-flex"
	>
		<div class="w-6 h-6 justify-center items-center flex">
			<ShapesIcon />
		</div>
		<div class="text-black text-lg font-medium leading-tight">Multiple Choice</div>
	</div>
	<div
		class="w-full h-16 p-4 bg-white rounded-md shadow border border-gray-500 justify-start items-center gap-3 inline-flex"
	>
		<div class="w-6 h-6 justify-center items-center flex">
			<TimerIcon />
		</div>
		<div class="text-black text-lg font-medium leading-tight">Schnelligskeitstest</div>
	</div>
	<div
		class="w-full h-16 p-4 bg-white rounded-md shadow border border-gray-500 justify-start items-center gap-3 inline-flex"
	>
		<div class="w-6 h-6 justify-center items-center flex">
			<FlashIcon />
		</div>
		<div class="text-black text-lg font-medium leading-tight">Test</div>
	</div>



</div>
<Footer />

