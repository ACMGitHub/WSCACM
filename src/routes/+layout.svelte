<script>
	import {
		Footer,
		FooterLinkGroup,
		FooterLink,
		Img,
		Heading,
		FooterCopyright
	} from 'flowbite-svelte';
	import '../app.css';
	import ScreenNav from '../lib/components/ScreenNav.svelte';
	import PhoneNav from '../lib/components/PhoneNav.svelte';

	export const prerender = true

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 570}
	<ScreenNav />
{:else}
	<PhoneNav />
{/if}

<div class="overview-hidden bg-[url(/images/circuit-board.jpeg)] bg-fixed bg-center bg-cover">
	<div class="my-24 lg:my-40">
		<Img src="/images/ACMLogo.png" alt="ACM Banner" class="w-1/2 md:w-1/4 mx-auto brightness-100" />

		<Heading
			tag="h1"
			class="text-3xl font-extrabold md:text-4xl lg:text-5xl text-slate-100 text-center"
		>
			Where ALL WSC Students Are Welcome!
		</Heading>
	</div>
	<div class="bg-slate-100 py-8">
		<div class="mx-12 md:mx-24 lg:mx-36"><slot /></div>
	</div>
	<Footer class="bg-slate-900 text-slate-300 py-8 text-center">
		<FooterLinkGroup ulClass="flex justify-evenly mt-3 text-sm list-none p-0">
			<FooterCopyright href="/" by="WSC ACM™" year={2024} /> |
			<FooterLink href="https://www.wsc.edu/">Wayne State College</FooterLink> |
			<FooterLink href="https://www.acm.org/">Association for Computing Machinery</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>
