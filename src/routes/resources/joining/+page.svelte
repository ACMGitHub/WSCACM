<script>
	import { Hr, List, Li } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="content-center space-y-4 mx-12 md:mx-24 lg:mx-36">
	<p class="text-center text-2xl font-extrabold md:text-3xl lg:text-3xl">How to Join</p>
	<Hr />
	<p>
		Being an active member of the ACM offers many benefits, ranging from access to valuable
		resources to opportunities for growth. Your participation not only enriches your experience but
		also helps our chapter give resources and expeience that you can use. We are diligently working
		towards inproving all student's education and experience, and your involvement is instrumental
		in this endeavor. <span>Membership dues are $20 for one school year.</span> They are not required
		but it does help the club afford T-shirts and equipment.
	</p>

	<div class="space-y-4 2xl:flex 2xl:justify-between">
		<div class="2xl:w-1/2">
			<p class="text-xl font-bold text-gray-900 sm:text-xl">Steps to join <span>WSC ACM</span>:</p>
			<br />
			<List class="list-decimal space-y-4">
				<Li>
					Create an account with <a href="https://accounts.acm.org/">myACM</a>: It’s free and gives
					you access to <span>ACM</span> resources and opportunities.
				</Li>
				<Li>
					Send your <span>ACM ID</span> to the <span>President</span> or
					<span>Vice President</span>: This allows us to add you to the <span>WSC ACM</span> chapter,
					to continue as a club on campus we need at least 20 registered members.
				</Li>
				<Li>
					Attend our <span>ACM</span> meetings: Check the
					<a href="{base}/meetingtimes">Meeting Times</a>
					page for more information. If our meeting times don't work with you, you can still participate
					in <span>ACM</span> with our subcommittees.
				</Li>
			</List>
		</div>
		<div>
			<img src="{base}/images/HowToJoinACM.gif" alt="How to Join Gif" height="100%" width="700" />
		</div>
	</div>
</div>

<style>
	span {
		font-weight: bold;
	}

	a {
		color: blue;
	}
</style>
