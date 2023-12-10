<script lang="ts">
    import Button from "../ui/button/button.svelte";
    // @TODO: Eigenes Logo hinzufügen, wie bei Facebook, Google, etc
    import { GithubLogo } from "radix-icons-svelte";
    import { signIn } from "@auth/sveltekit/client";

    const signInGithub = () => signIn("github", { callbackUrl: "/" });
</script>

<Button variant="outline" class="w-full h-8" on:click={signInGithub}>
    <GithubLogo />
    Sign in with GitHub
</Button>