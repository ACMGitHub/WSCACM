<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	let smallMenuHidden = true;

	$: activeUrl = $page.url.pathname; //this gets the page route which we use to style
	const tabsStyle =
		'font-semibold p-1 self-center rounded-md hover:text-slate-900 hover:bg-slate-100';
	const activeClass = 'text-slate-900 bg-slate-100 font-semibold self-center p-1 rounded-md';
</script>

<div class="text-slate-100 bg-slate-900 p-4 fixed top-0 left-0 right-0 text-center z-10 text-lg">
	<button
		class="font-semibold p-1 rounded-md w-full h-full"
		on:click={() => {
			smallMenuHidden = !smallMenuHidden;
		}}
	>
		<Icon class="mx-auto" icon="mdi:hamburger-menu" />
	</button>

	{#if !smallMenuHidden}
		<div class="h-screen">
			<ul class="p-3 bg-slate-900 space-y-6 mx-auto text-center text-nowrap list-none">
				<li>
					<a
						href="{base}/"
						class={activeUrl == '/' ? activeClass : tabsStyle}
						on:click={() => {
							smallMenuHidden = true;
						}}>Home</a
					>
				</li>
				<li>
					<a
						href="{base}/about"
						class={activeUrl == '/about' ? activeClass : tabsStyle}
						on:click={() => {
							smallMenuHidden = true;
						}}>About Us</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/comppro' ? activeClass : tabsStyle}
						href="{base}/committees/comppro"
						on:click={() => {
							smallMenuHidden = true;
						}}>Competitive Programming</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/project' ? activeClass : tabsStyle}
						href="{base}/committees/project"
						on:click={() => {
							smallMenuHidden = true;
						}}>Project Committee</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/robotics' ? activeClass : tabsStyle}
						href="{base}/committees/robotics"
						on:click={() => {
							smallMenuHidden = true;
						}}>Robotics Committee</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/website' ? activeClass : tabsStyle}
						href="{base}/committees/website"
						on:click={() => {
							smallMenuHidden = true;
						}}>Website Committee</a
					>
				</li>
				<li>
					<a
						href="{base}/meetingtimes"
						class={activeUrl == '/meetingtimes' ? activeClass : tabsStyle}
						on:click={() => {
							smallMenuHidden = true;
						}}
					>
						Meeting Times
					</a>
				</li>
				<li>
					<a
						href="{base}/contactus"
						class={activeUrl == '/contactus' ? activeClass : tabsStyle}
						on:click={() => {
							smallMenuHidden = true;
						}}
					>
						Contact Us
					</a>
				</li>
				<li>
					<a
						class={tabsStyle}
						href="{base}/resources/joining"
						on:click={() => {
							smallMenuHidden = true;
						}}>How to Join</a
					>
				</li>
				<li>
					<a
						class={tabsStyle}
						href="{base}/resources/teams"
						on:click={() => {
							smallMenuHidden = true;
						}}>Microsoft Teams</a
					>
				</li>
			</ul>
		</div>
	{/if}
</div>
