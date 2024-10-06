<script>
	import { Heading, Hr } from 'flowbite-svelte';
	import pic1 from "..../static/images/teams/pic1"
</script>

<div>
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl text-purple-600"
		>Microsoft Teams</Heading
	>
	<Hr />
	<p class="pb-4">
		Wayne State College ACM communicates and stores files using Microsoft Teams. Once a member of
		ACM you will have access to use the ACM Team in Teams. Teams allows us to branch out into
		different channels so we have a conversations for said channel. Everyone has access to all of
		the main channels except for the ACM Officers and ACM Officers Tasks channels as those are only
		for ACM Officers. Channels to keep an eye on are <b
			>General, Internship Opportunities, and any of the subcommittee channels</b
		>.
	</p>
	<p class="pb-4">
		If you are joining ACM it is recommended that you download Teams on your computer or phone as a
		majority of special updates and messages will presented there. Teams also allows you to message
		people individually or in groups, which helps cut down the amount of emails being sent back and
		forth.
	</p>
	<h2>
		Installation on PC
	</h2>
	<p>
		Steps
	</p>
	<p>
		You can download teams by clicking the link below
		<button class="py-4 bg-purple-800">
			<a href="https://go.microsoft.com/fwlink/?linkid=2281613&clcid=0x409&culture=en-us&country=us">Teams Microsoft</a>
		</button>
		<img src={pic1} alt="Download teams" />
	</p>
	
	
	<p class="pb-4">
		All Wayne State College Students have access to Teams through their myWSC. To view Teams on your
		browser all you have to do is log into your <b>myWSC</b>, go to
		<a href="https://www.wsc.edu/current-students">Resources for Current Students</a>, click on
		<b>Show More Applications</b>, then scroll down until you find <b>Mircosoft Teams</b>. To
		download Microsoft Teams click
		<a href="https://www.microsoft.com/en-us/microsoft-teams/log-in">here</a>. Make sure you sign in
		with your Wayne State College account. For more information about Microsoft Teams click
		<a href="https://www.wsc.edu/directory/31/help_sheets/category/957/categoryInfo/35">here</a>.
	</p>
</div>

<style>
	a {
		color: rgb(30 58 138);
		text-decoration: underline;
		font-weight: bold;
	}
	a:hover {
		color: rgb(29 78 216);
	}
</style>
