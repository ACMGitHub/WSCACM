<script>
	import { A, Heading, Hr, P, List } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="space-y-4">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl"
		>How to Join</Heading
	>
	<Hr />
	<p>
		Being an active member of the ACM offers many benefits, ranging from access to valuable
		resources to opportunities for growth. Your participation not only enriches your experience but
		also helps our chapter give resources and expeience that you can use. We are diligently working
		towards inproving all student's education and experience, and your involvement is instrumental
		in this endeavor.
	</p>

	<div class="py-4 grid gap-x-4 gap-y-4 md:grid-cols-2 sm:gap-y-16">
		<div>
			<p>Steps to join <span>WSC ACM</span>:</p>
			<List tag="ul">
				<li>
					Create an account with <a href="https://accounts.acm.org/">myACM</a>: It’s free and gives you access to <span>ACM</span> resources and opportunities.
				</li>
				<li>
					Send your <span>ACM ID</span> to the <span>President</span>  or <span>Vice President</span>: This allows us to add you to the <span>WSC ACM</span> chapter, to continue as a club on campus we need at least 20 registered members.
				</li>
				<li>
					Attend our <span>ACM</span> meetings: Check the <a href="{base}/meetingtimes">Meeting Times</a> page for more information. If our meeting times don't work with you, you can still participate in <span>ACM</span> with our subcommittees.
				</li>
			</List>
		</div>
		<div class="flex">
			<img src="{base}/images/ACMLogo.png" alt="Logo" height="100%" width="700">
		</div>
	</div>
	<p>
		<span>Membership dues are $20 for one school year.</span> They are not required but it does help the club afford T-shirts and equipment.
	</p>
	<!-- <p>
		If you are interested in joining ACM you can simply attend one our meetings or talk to anyone
		that you know is associated with ACM about joining. If our meeting times don't work with you,
		you can still participate in ACM with our subcommittees.
	</p>
	<p>
		<b>Membership dues are $20 for one school year.</b> They're are not required but it does help out
		the club to afford T-shirts and equipment.
	</p>
	<p>
		Please make a myACM account, it's free and it'll continue supporting our chapter. <b>
			Use this link to sign up:</b
		>
		<a
			href="https://accounts.acm.org/"
			class="text-blue-900 font-bold underline hover:text-blue-700"
			>myACM
		</a>
	</p>
	
	<p>
		Once you have successfully made an account, please forward your ACM ID number to either the
		President or Secretary. Your contribution is pivotal in helping us achieve our membership goals
		and further our impact as a chapter.
	</p> -->
</div>

<style>
	span {
		font-weight: bold;
	}

	a {
		color: blue;
	}
</style>