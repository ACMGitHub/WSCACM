<script>
	import { Heading, Hr, List, Li } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="space-y-4">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl"
		>Microsoft Teams</Heading
	>
	<Hr />

	<p>
		If you are joining <b>ACM</b> it is recommended that you download <b>Teams</b> on your computer
		or phone as a majority of special updates and messages will presented there. All
		<b>Wayne State College</b>
		students have access to <b>Teams</b> through their <b>myWSC</b>. To have access to the
		<b>ACM Team</b>
		talk to or message an <b>ACM officer</b> to add you.
	</p>
	<div class="py-4 md:flex md:justify-between">
		<div class="md:w-1/2">
			<p class="text-xl font-bold text-gray-900 sm:text-xl">To view Teams on browser:</p>
			<br />
			<List class="list-decimal space-y-2 pb-4">
				<Li>
					Log into your <a href="https://www.wsc.edu/mywsc" target="blank"><b>myWSC</b></a> account
				</Li>
				<Li>
					Go to
					<a href="https://www.wsc.edu/current-students" target="blank"
						>Resources for Current Students</a
					>
				</Li>
				<Li>
					Click on <b>Show More Applications</b>
				</Li>
				<Li>
					Scroll down until you find <b>Microsoft Teams</b>
				</Li>
			</List>
			<p class="text-xl font-bold text-gray-900 sm:text-xl">To download Microsoft Teams:</p>
			<br />
			<List class="list-decimal space-y-2">
				<Li>
					Go to the <a
						href="https://www.microsoft.com/en-us/microsoft-teams/download-app"
						target="blank">Microsoft Teams download page</a
					>
				</Li>
				<Li>Click Download for desktop (or Download for mobile if needed)</Li>
				<Li>Open the downloaded file and follow the installation prompts.</Li>
				<Li>
					Launch <b>Microsoft Teams</b> and sign in with your <b>Wayne State College</b> account
				</Li>
			</List>
		</div>
		<div>
			<img
				src="{base}/images/howtojointeams.gif"
				alt="how to join teams"
				height="100%"
				width="700"
			/>
		</div>
	</div>
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
