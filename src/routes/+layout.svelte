<script lang="ts">
    import "../app.postcss";
    import {currentUser} from "$lib/stores/user.js";
    import type {PageData} from "./$types";

    export let data: PageData;
    $: currentUser.set(data.user)
</script>
  
<slot />