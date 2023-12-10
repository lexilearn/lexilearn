<script lang="ts">
    import Button from "../ui/button/button.svelte";
    // @TODO: Eigenes Logo hinzufügen, wie bei Facebook, Google, etc
    import { GithubLogo } from "radix-icons-svelte";

</script>

<Button variant="outline" class="w-full h-8">
    <GithubLogo />
    Sign up with GitHub
</Button>