<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table border="1">
	<tr>
		{#each data.collections as collection}
			<td>{@html collection.}</td>
		{/each}
	</tr>
	<tr>
		{#each data.collections as card}
			<td>{@html card.answer}</td>
		{/each}
	</tr>
</table>
