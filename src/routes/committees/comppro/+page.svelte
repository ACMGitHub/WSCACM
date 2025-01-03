<script>
	import { Heading, Hr, List, Li } from 'flowbite-svelte';
</script>

<div class="mx-12">
	<Heading
		tag="h1"
		class="text-center"
		customSize="text-2xl font-extrabold  md:text-3xl lg:text-3xl"
		>Competitive Programming
	</Heading>
	<Hr class="my-8 " />

	<p>
		Competitive Programming is a new subcommittee added in 2022. This allows members to compete in
		online programming competitions. Most if not all competitions allow C, C++, C#, Python, and
		Java. Competitions can either be a group competition or individual competition. This gives you
		the opportunity to show off your programming skills and train your way of thinking.
	</p>
	<div class="flex flex-col md:flex-row gap-x-6">
		<div class="flex-1">
			<Heading
				tag="h3"
				class="text-align-left"
				customSize="text-lg font-extrabold m-4 md:text-xl lg:text-xl"
				>Rules
			</Heading>
			<List tag="ul" list="disc" class="ps-5 space-y-1">
				<Li
					>At least one team captian to hold practices and look for competitions to participate in.</Li
				>
				<Li>Any one within ACM is allowed to participate.</Li>
				<Li>Be respectable to others and their skill level.</Li>
			</List>
		</div>
		<div class="flex-1 justify-between">
			<Heading
				tag="h3"
				class="text-align-left"
				customSize="text-lg font-extrabold m-4  md:text-xl lg:text-xl"
				>Recommendations
			</Heading>
			<List tag="ul" list="disc" class="ps-5 space-y-1">
				<Li>Have weekly or biweekly practices/meetings that work for the most people.</Li>
				<Li
					>Just because someone can't make it to meetings doesn't mean they can't be part of
					Competitive Programming.</Li
				>
				<Li
					>Group people up for each practice at the start of the school year. Different groups each
					practice.</Li
				>
			</List>
		</div>
	</div>
</div>
