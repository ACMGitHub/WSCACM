<script>
	import { A, Heading, Hr, Li, List, P } from 'flowbite-svelte';
</script>

<div class="mx-12 md:mx-24 lg:mx-36">
	<Heading
		tag="h1"
		class="text-center"
		customSize="text-2xl font-extrabold  md:text-3xl lg:text-3xl"
		>Robotics Committee
	</Heading>
	<Hr class="my-8" />
	<p>
		The focus of robotics committee is to allow students to be creative. Dr. Molly Curnyn is in
		charge of the robotics lab. There are certain rules that ACM have plus rules that Dr. Curnyn has
		in regards to using the lab. ACM has our own Vex robotics kit that students can use along with
		additional components like Arduinos, motors, chains, etc. As of now do don't do competitions as
		we believe students will get more enjoyment out of it by being able to explore themselves.
	</p>
	<Heading
		tag="h3"
		class="text-center"
		customSize="text-lg font-extrabold m-4 md:text-xl lg:text-xl"
		>Rules
	</Heading>
	<!-- for some reason list-disc only needs to be in one spot for there to be bullet points -->
	<List tag="ul" list="disc" class="ps-5 space-y-1">
		<Li
			>The students in the robotics committee will need Dr. Curnyn's permission to use the lab and
			when to use the lab.
		</Li>
		<Li
			>A trusted and responsible individual (either student or advisor) must be present at all times
			in case of emergency and overall lab room etiquette.</Li
		>
		<Li
			>Students must know and follow safety protocols and procedures or their access to use the lab
			will end.
		</Li>
		<Li
			>There can be multiple groups working on different robots but there would also have to be
			multiple project leaders.</Li
		>
		<Li>Clean up the lab when finished.</Li>
		<Li>Lock the lab when done.</Li>
		<Li>Don't break or take apart already made equipment in the lab.</Li>
		<Li>Make sure Dr. Curnyn knows that the lab is being used.</Li>
	</List>
	<Heading
		tag="h3"
		class="text-center"
		customSize="text-lg font-extrabold m-4  md:text-xl lg:text-xl"
		>Recommendations
	</Heading>
	<List tag="ul" list="disc" class="space-y-1 ps-5">
		<Li>Meet weekly or biweekly to work on a robot(s).</Li>
		<Li>Find a project(s) that everyone can work on together.</Li>
		<Li>I suggest one big project that will take several meetings over.</Li>
		<Li
			>Diving in head first and trying to make things work is your best bet at learning robotics.</Li
		>
		<Li>Have a engineers journal to keep track of progress.</Li>
	</List>
</div>
