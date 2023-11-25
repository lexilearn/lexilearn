<script lang="ts">
	import FacebookLoginButton from '$lib/components/auth/facebook-login-button.svelte';
	import GoogleLoginButton from '$lib/components/auth/google-login-button.svelte';
	import Title from '$lib/components/auth/title.svelte';
	import Logo from '$lib/components/icons/Logo.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
</script>

<div class="h-screen w-full flex flex-col space-y-3 items-center justify-center">
	<div class="w-12 h-12 flex items-center justify-center shrink-0"><Logo /></div>
	<Title title="Login to account" />
	<div class="w-64 space-y-3">
		<GoogleLoginButton />
		<FacebookLoginButton />
		<div class="flex items-center space-x-1 justify-between">
			<div class="w-14 h-px border border-slate-200"></div>
			<div class=" text-slate-400 text-xs font-normal leading-tight">OR CONTINUE WITH</div>
			<div class="w-14 h-px border border-slate-200"></div>
		</div>

        <Input type="email" placeholder="name@email.com" class="h-9" />
        <Input type="password" placeholder="Password" class="h-9" />
        <Button class="w-full" size="sm">Login</Button>
        <div class="w-full flex items-center justify-between">
            <a href="/auth/forgot-password">
                <div class="text-slate-400 text-xs">Forgot password?</div>
            </a>
            <a href="/auth/register">
                <div class="text-slate-600 text-xs">Create an account</div>
            </a>
        </div>
    </div>
</div>
