<script>
	import { Hr, List, Li } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="w-full py-9 px-6 md:px-12 lg:px-24 xl:px-36 flex items-center text-white">
	<div class="w-full max-w-7xl mx-auto space-y-12">
		<!-- Title -->
		<div class="text-center space-y-4">
			<p class="text-3xl font-extrabold md:text-4xl">Microsoft Teams</p>
			<Hr class="border-gray-600" />
		</div>

		<!-- Description -->
		<p class="text-lg leading-relaxed text-gray-400 mx-auto">
			If you are joining ACM, it is recommended that you download Teams on your computer or phone as
			a majority of special updates and messages will be presented there. All Wayne State College
			students have access to Teams through their myWSC account. To get access to the ACM Team, talk
			to or message an ACM officer to add you.
		</p>

		<!-- Steps + Image -->
		<div class="flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between gap-12">
			<!-- Steps -->
			<div class="w-full xl:w-1/2 space-y-8">
				<p class="text-xl font-bold text-white">To view Teams on browser:</p>

				<List class="list-decimal list-inside space-y-3 text-gray-400">
					<Li>
						Log into your <a
							href="https://www.wsc.edu/mywsc"
							target="_blank"
							class="text-blue-500 underline">myWSC</a
						> account
					</Li>
					<Li>
						Go to <a
							href="https://www.wsc.edu/current-students"
							target="_blank"
							class="text-blue-500 underline">Resources for Current Students</a
						>
					</Li>
					<Li>Click on <b>Show More Applications</b></Li>
					<Li>Scroll down until you find <b>Microsoft Teams</b></Li>
				</List>

				<p class="text-xl font-bold text-white">To download Microsoft Teams:</p>

				<List class="list-decimal list-inside space-y-3 text-gray-400">
					<Li>
						Go to the <a
							href="https://www.microsoft.com/en-us/microsoft-teams/download-app"
							target="_blank"
							class="text-blue-500 underline">Microsoft Teams download page</a
						>
					</Li>
					<Li>Click Download for desktop (or Download for mobile if needed)</Li>
					<Li>Open the downloaded file and follow the installation prompts.</Li>
					<Li
						>Launch <b>Microsoft Teams</b> and sign in with your <b>Wayne State College</b> account</Li
					>
				</List>
			</div>

			<!-- Image -->
			<div class="flex justify-center">
				<img
					src="{base}/images/howtojointeams.gif"
					alt="how to join teams"
					height="100%"
					width="900"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	a {
		color: #3b82f6; /* Tailwind blue-500 */
	}
</style>
