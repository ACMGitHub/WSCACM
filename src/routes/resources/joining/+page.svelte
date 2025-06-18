<script>
	import { Hr, List, Li } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="w-full py-9 px-6 md:px-12 lg:px-24 xl:px-36 flex items-center text-white">
	<div class="w-full max-w-7xl mx-auto space-y-12">
		<!-- Title -->
		<div class="text-center space-y-4">
			<p class="text-3xl font-extrabold md:text-4xl">How to Join</p>
			<Hr />
		</div>

		<!-- Description -->
		<p class="text-lg leading-relaxed text-gray-400">
			Being an active member of the ACM offers many benefits, ranging from access to valuable
			resources to opportunities for growth. Your participation not only enriches your experience
			but also helps our chapter provide tools and events that support your success. We are
			diligently working to improve student education and experience—and your involvement is
			instrumental in this.
			<span class="font-bold">Membership dues are $20 for one school year.</span> These are optional
			but help us cover T-shirts, equipment, and snacks.
		</p>

		<!-- Steps + Image -->
		<div class="flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between gap-12">
			<!-- Steps -->
			<div class="w-full xl:w-1/2 space-y-6">
				<p class="text-xl font-bold text-white">
					Steps to join <span class="font-bold">WSC ACM</span>:
				</p>

				<List class="list-decimal list-inside space-y-4 text-gray-400">
					<Li>
						Create an account at
						<a href="https://accounts.acm.org/" target="_blank" class="text-blue-600 underline"
							>myACM</a
						>. It’s free and gives you access to <span class="font-bold">ACM</span> resources and opportunities.
					</Li>
					<Li>
						Send your <span class="font-bold">ACM ID</span> to the
						<span class="font-bold">President</span>
						or
						<span class="font-bold">Vice President</span> so we can officially add you to the chapter
						roster.
					</Li>
					<Li>
						Start attending meetings! See our
						<a href="{base}/meetingtimes" class="text-blue-600 underline">Meeting Times</a>. If you
						can't make the time, you can still participate in our subcommittees and events.
					</Li>
				</List>
			</div>

			<!-- Image -->
			<div class="w-full xl:w-1/2 flex justify-center">
				<img
					src="{base}/images/HowToJoinACM.gif"
					alt="How to Join ACM"
					class="rounded-xl shadow-lg max-w-full h-auto"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	span {
		font-weight: bold;
	}
</style>
