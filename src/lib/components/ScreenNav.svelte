<script>
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	let committeesHidden = true;
	let resourcesHidden = true;

	$: activeUrl = $page.url.pathname; //this gets the page route which we use to style
	const tabsStyle =
		'font-semibold transition duration-300 p-1 self-center rounded-md hover:text-slate-900 hover:bg-slate-100';
	const activeClass = 'text-slate-900 bg-slate-100 font-semibold self-center p-1 rounded-md';
	const dropDownStyle =
		'w-min p-3 bg-slate-900 space-y-3 text-slate-100 rounded-md text-center text-nowrap list-none';

</script>

<div
	class="text-slate-100 bg-slate-900 p-4 fixed top-0 left-0 right-0 flex justify-evenly z-10 text-sm md:text-lg"
>
	<img src= "./images/ACMLogo.png/" alt = "ACM Logo" width = "40">
	<a href="{base}/" class={activeUrl == `${base}/` ? activeClass : tabsStyle}>Home</a>
	<a href="{base}/about" class={activeUrl == `${base}/about` ? activeClass : tabsStyle}>About Us</a>
	<div
		class="relative"
		on:mouseover={() => {
			committeesHidden = false;
		}}
		on:mouseleave={() => {
			committeesHidden = true;
		}}
		on:focus={() => {
			committeesHidden = !committeesHidden;
		}}
		aria-haspopup="true"
		role="button"
		tabindex="-1"
	>
		<button class="flex {tabsStyle}">
			Committees
			<Icon
				icon="ep:arrow-down-bold"
				class="m-1 duration-150 self-center {committeesHidden ? '-rotate-0' : '-rotate-180'}"
			/>
		</button>
		{#if !committeesHidden}
			<div class="absolute -left-12" transition:slide={{ duration: 300, axis: 'y' }}>
				<ul class={dropDownStyle}>
					<li>
						<a
							class={activeUrl == `${base}/committees/comppro` ? activeClass : tabsStyle}
							href="{base}/committees/comppro">Competitive Programming</a
						>
					</li>
					<li>
						<a
							class={activeUrl == `${base}/committees/project` ? activeClass : tabsStyle}
							href="{base}/committees/project">Project Committee</a
						>
					</li>
					<li>
						<a
							class={activeUrl == `${base}/committees/robotics` ? activeClass : tabsStyle}
							href="{base}/committees/robotics">Robotics Committee</a
						>
					</li>
					<li>
						<a
							class={activeUrl == `${base}/committees/website` ? activeClass : tabsStyle}
							href="{base}/committees/website">Website Committee</a
						>
					</li>
				</ul>
			</div>
		{/if}
	</div>
	<a
		href="{base}/meetingtimes"
		class={activeUrl == `${base}/meetingtimes` ? activeClass : tabsStyle}
	>
		Meeting Times
	</a>
	<a href="{base}/contactus" class={activeUrl == `${base}/contactus` ? activeClass : tabsStyle}>
		Contact Us
	</a>
	<div
		class="relative"
		on:mouseover={() => {
			resourcesHidden = false;
		}}
		on:mouseleave={() => {
			resourcesHidden = true;
		}}
		on:focus={() => {
			resourcesHidden = !resourcesHidden;
		}}
		aria-haspopup="true"
		role="button"
		tabindex="-1"
	>
		<button class="flex {tabsStyle}"
			>Resources
			<Icon
				icon="ep:arrow-down-bold"
				class="m-1 duration-150 self-center {resourcesHidden ? '-rotate-0' : '-rotate-180'}"
			/>
		</button>

		{#if !resourcesHidden}
			<div class="absolute -left-5">
				<ul class={dropDownStyle} transition:slide={{ duration: 300, axis: 'y' }}>
					<li>
						<a
							class={activeUrl == `${base}/resources/joining` ? activeClass : tabsStyle}
							href="{base}/resources/joining">How to Join</a
						>
					</li>
					<li>
						<a
							class={activeUrl == `${base}/resources/teams` ? activeClass : tabsStyle}
							href="{base}/resources/teams">Microsoft Teams</a
						>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</div>
