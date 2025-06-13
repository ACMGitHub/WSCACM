<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	let smallMenuHidden = $state(true);

	let activeUrl = $derived($page.url.pathname); //this gets the page route which we use to style
	const tabsStyle =
		'font-semibold p-1 self-center rounded-md hover:text-slate-900 hover:bg-slate-100';
	const activeClass = 'text-slate-900 bg-slate-100 font-semibold self-center p-1 rounded-md';
</script>

<div class="text-slate-100 bg-slate-900 p-4 fixed top-0 left-0 right-0 text-center z-10 text-lg">
	<button
		class="font-semibold p-1 rounded-md w-full h-full"
		onclick={() => {
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
						onclick={() => {
							smallMenuHidden = true;
						}}>Home</a
					>
				</li>
				<li>
					<a
						href="{base}/about"
						class={activeUrl == '/about' ? activeClass : tabsStyle}
						onclick={() => {
							smallMenuHidden = true;
						}}>About Us</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/comppro' ? activeClass : tabsStyle}
						href="{base}/committees/comppro"
						onclick={() => {
							smallMenuHidden = true;
						}}>Competitive Programming</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/project' ? activeClass : tabsStyle}
						href="{base}/committees/project"
						onclick={() => {
							smallMenuHidden = true;
						}}>Project Committee</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/robotics' ? activeClass : tabsStyle}
						href="{base}/committees/robotics"
						onclick={() => {
							smallMenuHidden = true;
						}}>Robotics Committee</a
					>
				</li>
				<li>
					<a
						class={activeUrl == '/committees/website' ? activeClass : tabsStyle}
						href="{base}/committees/website"
						onclick={() => {
							smallMenuHidden = true;
						}}>Website Committee</a
					>
				</li>
				<li>
					<a
						href="{base}/meetingtimes"
						class={activeUrl == '/meetingtimes' ? activeClass : tabsStyle}
						onclick={() => {
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
						onclick={() => {
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
						onclick={() => {
							smallMenuHidden = true;
						}}>How to Join</a
					>
				</li>
				<li>
					<a
						class={tabsStyle}
						href="{base}/resources/teams"
						onclick={() => {
							smallMenuHidden = true;
						}}>Microsoft Teams</a
					>
				</li>
			</ul>
		</div>
	{/if}
</div>
