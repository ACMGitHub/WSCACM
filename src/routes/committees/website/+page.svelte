<script>
	import { Heading, Hr, Li, List } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="text-center" customSize="text-2xl font-extrabold  md:text-3xl lg:text-3xl"
	>Website Committee
</Heading>
<Hr class="my-8" />
<p>
	The Website Committee takes care of the ACM Website. They would update the website with new
	pictures, information, and features. This website in made using the SvelteKit package, the
	tailwindcss library, and additional tools making it stream lined and easy for programmers to jump
	right in. In the Website Committee you'll learn skills like team work, proper website design, user
	interactivity, and the importance of code review.
</p>
<Heading tag="h3" class="text-center" customSize="text-lg font-extrabold m-4 md:text-xl lg:text-xl"
	>Rules
</Heading>
<!-- for some reason list-disc only needs to be in one spot for there to be bullet points -->
<List tag="ul" list="disc" class="ps-5 space-y-1">
	<Li
		>There needs to be one project leader that is in charge of organizing and reviewing any changes
		to the site.</Li
	>
	<Li>A basic level of how GitHub works before writing any code.</Li>
	<Li>Branches should be based on features.</Li>
	<!-- Dog -->
	<Li>Keep to the color scheme.</Li>
	<Li>Reupload the old site only if the current site has issues.</Li>
	<Li>Everyone has to have a GitHub account.</Li>
</List>
<Heading tag="h3" class="text-center" customSize="text-lg font-extrabold m-4  md:text-xl lg:text-xl"
	>Recommendations
</Heading>
<List tag="ul" list="disc" class="space-y-1 ps-5">
	<Li>Meet weekly or biweekly to discuss website plans.</Li>
	<Li>Understanding of HTML, JavaScript, and CSS.</Li>
	<Li
		>Anyone new to web development, SvelteKit, or Tailwindcss should only make small changes like
		updating or adding photos.
	</Li>
	<Li>Have common a goal and outline for a feature to be completed.</Li>
</List>
<Heading tag="h3" class="text-center" customSize="text-lg font-extrabold m-4  md:text-xl lg:text-xl"
	>Resources
</Heading>
<List tag="ul" list="disc" class="space-y-1 ps-5">
	<Li><a href="https://kit.svelte.dev/">SvelteKit</a></Li>
	<Li><a href="https://tailwindcss.com/">Tailwindcss</a></Li>
	<Li><a href="https://flowbite-svelte.com/">Flowbite Svelte</a></Li>
	<Li><a href="https://github.com/">GitHub</a></Li>
</List>

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
