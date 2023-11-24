<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<table border="1">
	<tr>
		{#each data.cards as card}
			<td>{@html card.question}</td>
		{/each}
	</tr>
	<tr>
		{#each data.cards as card}
		<td>{@html card.answer}</td>
	{/each}
	</tr>
</table>
