<script>
	import { A, Heading, Hr, Li, List, P } from 'flowbite-svelte';
</script>

<div class="mx-12 md:mx-24 lg:mx-36">
	<Heading
		tag="h1"
		class="text-center"
		customSize="text-2xl font-extrabold  md:text-3xl lg:text-3xl"
		>Project Committee
	</Heading>
	<p>
		Project committee allows students to develop projects together in a team setting. There can be
		one or several groups within project committee whose focus is to develop something that will
		challenge and improve upon their own skills. The something can be a wide array of things
		involving software, hardware, web development, networking, etc. Every Show-and-Tell night
		project committee will be asked to update on their progress of their project, this helps add
		some accountability.
	</p>
	<Hr class="my-8" />
	<Heading
		tag="h3"
		class="text-center"
		customSize="text-lg font-extrabold m-4 md:text-xl lg:text-xl"
		>Rules
	</Heading>
	<!-- for some reason list-disc only needs to be in one spot for there to be bullet points -->
	<List tag="ul" list="disc" class="ps-5 space-y-1">
		<Li>Requirements of a project depend on said project.</Li>
		<Li
			>To work with hardware students would have to talk to ACM Officers and the Officers will talk
			to the advisor and/or additional professors to use hardware if it isn't available.
		</Li>
		<Li
			>If someone wants to take hardware with them that would be a discussion with the Officers, the
			advisor, and the additional professor.</Li
		>
		<Li
			>Those that work in a group need to understand that everyone has different skill sets,
			priorities, paces, responsibilities, etc...
		</Li>
		<Li>A project leader to keep the project on track and organized.</Li>
	</List>
	<!-- Bird -->
	<Heading
		tag="h3"
		class="text-center"
		customSize="text-lg font-extrabold m-4  md:text-xl lg:text-xl"
		>Recommendations
	</Heading>
	<List tag="ul" list="disc" class="space-y-1 ps-5">
		<Li>Have common a goal, outline, and milestones for the project.</Li>
		<Li>A basic level of how GitHub works before writing any code.</Li>
		<Li>Meet weekly or biweekly to discuss website plans.</Li>
		<Li>Find a time that works with all of you to meet up to discuss, work, plan, update, etc...</Li
		>
	</List>
</div>
