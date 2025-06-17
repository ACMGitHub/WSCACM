<script>
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';
	import { Dropdown, DropdownItem } from 'flowbite-svelte';

	let isOpen = $derived(false);

	let activeUrl = $derived($page.url.pathname); //this gets the page route which we use to style
	const tabsStyle =
		'font-semibold my-auto transition duration-300 p-1 self-center rounded-md hover:text-slate-900 hover:bg-slate-100';
	const activeClass =
		'p-1 text-slate-900 bg-slate-100 my-auto font-semibold self-center rounded-md';
	const dropDownStyle =
		'w-min p-3 bg-slate-900 space-y-3 text-slate-100 rounded-md text-center text-nowrap list-none';

	$inspect(isOpen);
</script>

<div
	class="text-slate-100 bg-slate-900 px-4 sticky top-0 left-0 right-0 flex justify-around z-10 text-sm md:text-lg"
>
	<img src="{base}/images/ACMLogo.png" alt="ACM Logo" class="w-36" />
	<a href="{base}/" class={activeUrl == `${base}/` ? activeClass : tabsStyle}>Home</a>
	<a href="{base}/about" class={activeUrl == `${base}/about` ? activeClass : tabsStyle}>About Us</a>
	<a
		href="{base}/meetingtimes"
		class={activeUrl == `${base}/meetingtimes` ? activeClass : tabsStyle}
	>
		Meeting Times
	</a>
	<a href="{base}/contactus" class={activeUrl == `${base}/contactus` ? activeClass : tabsStyle}>
		Contact Us
	</a>
	<button
		class="flex {tabsStyle}"
		onclick={() => {
			isOpen = !isOpen;
		}}
		>Resources<Icon
			icon="ep:arrow-down-bold"
			class="m-1 duration-150 self-center {isOpen ? '-rotate-0' : '-rotate-180'}"
		/></button
	>
	<Dropdown
		{activeUrl}
		simple
		class={dropDownStyle}
		transition={slide}
		transitionParams={{ duration: 300, axis: 'y' }}
	>
		<DropdownItem
			onclick={() => (isOpen = false)}
			href="{base}/resources/joining"
			class={activeUrl == `${base}/resources/joining` ? activeClass : tabsStyle}
			>How to Join</DropdownItem
		>
		<DropdownItem
			onclick={() => (isOpen = false)}
			href="{base}/resources/teams"
			class={activeUrl == `${base}/resources/teams` ? activeClass : tabsStyle}
			>Microsoft Teams</DropdownItem
		>
	</Dropdown>
</div>
