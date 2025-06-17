<script>
	import { Hr, List, Li } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="content-center space-y-4 mx-12 md:mx-24 lg:mx-36">
	<p class="text-center text-2xl font-extrabold md:text-3xl lg:text-3xl">Microsoft Teams</p>
	<Hr />
	<p>
		If you are joining ACM it is recommended that you download Teams on your computer or phone as a
		majority of special updates and messages will presented there. All Wayne State College students
		have access to Teams through their myWSC. To have access to the ACM Team talk to or message an
		ACM officer to add you.
	</p>
	<div class="space-y-4 2xl:flex 2xl:justify-between">
		<div class="2xl:w-1/2">
			<p class="text-xl font-bold text-gray-900 sm:text-xl">To view Teams on browser:</p>
			<br />
			<List class="list-decimal space-y-2 pb-4">
				<Li>
					Log into your <a href="https://www.wsc.edu/mywsc" target="blank">myWSC</a> account
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
		color: blue;
	}
</style>
