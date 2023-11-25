<script lang="ts">
	import type { PageData } from './$types';
	import { Input } from '$lib/components/ui/input';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import MagnifyingGlass from '$lib/components/icons/MagnifyingGlass.svelte';
	import ArrowTopRight from '$lib/components/icons/ArrowTopRight.svelte';
	import Logo from '$lib/components/icons/Logo.svelte';
	import Settings from '$lib/components/icons/Settings.svelte';
	import Footer from '$lib/components/menu/footer.svelte';
	import HeaderMenu from '$lib/components/menu/HeaderMenu.svelte';
	export let data: PageData;
</script>

<div class="max-w-md py-3 px-5 space-y-3">
	<HeaderMenu />
	<h2 class="text-2xl font-semibold">Bibliothek</h2>

	<div class="flex w-full space-x-2 items-center justify-between">
		<Input type="email" placeholder="Finde dein Lernset" class="w-full" />
		<Button size="icon" class="shrink-0" variant="default"><MagnifyingGlass /></Button>
	</div>

	<h4 class="text-md font-medium p-1">Zuletzt benutzt</h4>

	<div class="space-y-2 w-full">
		{#each data.collections as collection}
			<div
				on:click={(e) => {
					window.location.href = "/train/" + collection.id;
				}}
				class="w-full p-4 border border-[#DA627D] rounded-[6px] space-y-1"
			>
				<div class="flex text-[#DA627D] items-center text-sm space-x-1">
					<div class=" flex items-center justify-center">
						<ArrowTopRight />
					</div>
					<div>4 days</div>
				</div>

				<div class="text-sm font-semibold">{collection.name}</div>
				<div class="p-0.5 text-sm w-20 rounded-md bg-slate-100 flex justify-center items-center">
					{collection.card_ids.length} Begriffe
				</div>
				<div class="w-full overflow-hidden truncate text-slate-400 h-6 flex items-end text-xs">
					Zuletzt bearbeitet am {new Date(collection.updated).toLocaleDateString()}
				</div>
			</div>
		{/each}
	</div>
</div>

<Footer />
