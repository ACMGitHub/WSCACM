<script>
	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';
	import ScreenNav from '../lib/components/ScreenNav.svelte';
	import PhoneNav from '../lib/components/PhoneNav.svelte';
	import { base } from '$app/paths';
	import '@fontsource-variable/jetbrains-mono';

	let { children } = $props();

	let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

<div
	class="flex flex-col h-screen bg-slate-100 bg-[url('/images/circuit-board.jpeg')] bg-cover bg-center"
>
	<div class="shrink-0">
		{#if innerWidth >= 840}
			<ScreenNav />
		{:else}
			<PhoneNav />
		{/if}
	</div>

	<div class="flex-1 overflow-auto bg-black/60">
		{@render children?.()}
	</div>

	<div class="shrink-0">
		<Footer class="bg-slate-900 text-slate-300 p-6 items-center justify-center">
			<FooterLinkGroup ulClass="flex justify-evenly text-sm list-none">
				<FooterCopyright href="{base}/" by="WSC ACM™" year={2024} /> |
				<FooterLink href="https://www.wsc.edu/">Wayne State College</FooterLink> |
				<FooterLink href="https://www.acm.org/">Association for Computing Machinery</FooterLink>
			</FooterLinkGroup>
		</Footer>
	</div>
</div>
