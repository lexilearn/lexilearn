<script lang="ts">
	import Bookmark from '../icons/Bookmark.svelte';
	import GlobeIcon from '../icons/GlobeIcon.svelte';
	import UserIcon from '../icons/UserIcon.svelte';
	import Button from '../ui/button/button.svelte';
</script>

<div class="fixed opacity-75 bg-white left-0 bottom-0 w-full px-14 h-14 border-t flex items-center justify-between">
	<a href="/bookmarks">
		<Button variant="ghost" size="icon">
			<Bookmark />
		</Button>
	</a>
	<a href="/">
		<Button variant="ghost" size="icon">
			<GlobeIcon />
		</Button>
	</a>
	<a href="/account">
		<Button variant="ghost" size="icon">
			<UserIcon />
		</Button>
	</a>
</div>
