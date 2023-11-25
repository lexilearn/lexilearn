<script lang="ts">
    import {applyAction, enhance} from '$app/forms'
    import {pb} from '$lib/pocketbase'

    import {Label} from "radix-svelte"
</script>

<form
        method="POST"
        class="card"
        use:enhance={() => async ({ result }) => {
            pb.authStore.loadFromCookie(document.cookie);
            await applyAction(result);
        }}
>
    <h1 class="text-2xl mb-8">Log in</h1>
    <div class="form-control gap-2 mb-4">
        <fieldset class="flex w-full flex-col justify-start">
            <Label.Root class="mb-2.5 block text-sm leading-none text-black" for="email">
                Email
            </Label.Root>
            <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="max.mustermann@example.com"
                    class="h-8 shrink-0 grow rounded border px-2.5
				leading-none text-vermilion-900 outline-none focus:ring-2 focus:ring-vermilion-800"/>
        </fieldset>

        <fieldset class="flex w-full flex-col justify-start">
            <Label.Root class="mb-2.5 block text-sm leading-none text-white" for="password">
                Passwort
            </Label.Root>
            <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="187dee$nut$Lord"
                    class="h-8 shrink-0 grow rounded border px-2.5
				leading-none text-vermilion-900 outline-none focus:ring-2 focus:ring-vermilion-800"/>
            <button class="btn btn-primary">Log in</button>
        </fieldset>
    </div>
</form>
