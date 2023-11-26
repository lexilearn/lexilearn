<script lang="ts">
    import AccessibilityIcon from "$lib/components/icons/AccessibilityIcon.svelte";
    import RocketIcon from "$lib/components/icons/RocketIcon.svelte";
    import StarIcon from "$lib/components/icons/StarIcon.svelte";
    import HeaderMenu from "$lib/components/menu/HeaderMenu.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { page } from "$app/stores"
</script>

<div class="max-w-md py-3 px-5 space-y-3">
    <HeaderMenu />

    <div class="space-y-3 border-b">
        <h1 class="text-2xl font-semibold w-full overflow-hidden">Account</h1>
        <div class="font-light">{$page.data.session?.user?.email}</div>
        <Button class="w-full" size="sm">Freund einladen</Button>
    </div>

    <div class="space-y-3 border-b py-4 border-t">
        <h1 class="text-2xl font-semibold w-full overflow-hidden">Statistik</h1>
        <div class="w-full h-20 space-y-2">
            <div class="flex w-full space-x-2 justify-between">
                <Button variant="ghost"
                        class="border  border-[#DA627D] text-sm rounded font-medium w-full h-10 flex px-3 items-center">
                    <div class="text-[#DA627D] font-semibold mr-2">18</div>
                    Tage Streak
                </Button>
                <Button variant="ghost"
                        class="border  border-[#DA627D] text-sm rounded font-medium w-full h-10 flex px-3 items-center">
                    <div class="text-[#DA627D] flex items-center justify-center font-semibold mr-2">
                        <StarIcon />
                    </div>
                    Sterne
                </Button>
            </div>
            <div class="flex w-full space-x-2 justify-between">
                <Button variant="ghost"
                        class="border  border-[#DA627D] text-sm rounded font-medium w-full h-10 flex px-3 items-center">
                    <div class="font-semibold text-[#DA627D] mr-2">
                        <AccessibilityIcon />
                    </div>
                    Freunde
                </Button>
                <Button variant="ghost"
                        class="border  border-[#DA627D] text-sm rounded font-medium w-full h-10 flex px-3 items-center">
                    <div class="text-[#DA627D] flex items-center justify-center font-semibold mr-2">
                        <RocketIcon />
                    </div>
                    Erfolge
                </Button>
            </div>
        </div>
    </div>
</div>
