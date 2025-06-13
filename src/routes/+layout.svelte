<script>
	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';
	import '../app.css';
	import ScreenNav from '../lib/components/ScreenNav.svelte';
	import PhoneNav from '../lib/components/PhoneNav.svelte';
	import { base } from '$app/paths';
	import '@fontsource-variable/jetbrains-mono';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 840}
	<ScreenNav />
{:else}
	<PhoneNav />
{/if}

<div class="mt-24">
	<div class="bg-slate-100 py-8">
		<div>{@render children?.()}</div>
	</div>
	<Footer class="bg-slate-900 text-slate-300 py-8 text-center">
		<FooterLinkGroup ulClass="flex justify-evenly mt-3 text-sm list-none p-0">
			<FooterCopyright href="{base}/" by="WSC ACM™" year={2024} /> |
			<FooterLink href="https://www.wsc.edu/">Wayne State College</FooterLink> |
			<FooterLink href="https://www.acm.org/">Association for Computing Machinery</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>
