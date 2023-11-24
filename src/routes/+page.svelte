<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<table border="1">
    {#each data.collections as collection}
    <th>{collection.name}</th>
    {/each}
    <tr>
        {#each data.collections as collection}
        <td><a href="/train/{collection.id}">Train</a></td>
        {/each}
    </tr>
</table>