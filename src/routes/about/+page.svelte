<script>
	import { Img } from 'flowbite-svelte';
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
</script>

<div class="content-center mx-12 md:mx-24 lg:mx-36">
	<div class="2xl:flex 2xl:justify-between space-x-4 pb-4">
		<div class="space-y-4 2xl:w-1/2 pb-4">
			<p class="text-2xl font-extrabold md:text-3xl lg:text-3xl">What is WSC ACM?</p>
			<p class="3xl:text-lg">
				The <b>Wayne State College ACM chapter</b> is a student group affiliated with the international
				ACM, a nonprofit organization that connects computing educators, researchers, and professionals
				worldwide. Headquartered in New York, ACM is the largest scientific and educational computing
				association globally.
			</p>
			<p class="italic 3xl:text-lg">
				The organization has about 100,000 student as well as professional members from all around
				the world. ACM organization offers $1.5 million in scholarships. There are different ACM
				conferences, research opportunities, competitions, webinars, and other educational and
				informational events open to the organization's members which are sponsored by ACM, colleges
				that participate in ACM, and by different Tech companies like Microsoft and Google.
			</p>
		</div>
		<div class="2xl:w-1/2" in:fly={{ x: 200, duration: 2000 }}>
			<Img
				src="{base}/images/none_specific/2023_2024/groupPic.jpeg"
				alt="2024 ACM group picture"
				alignment="ms-auto"
				class="rounded-2xl shadow-xl"
			/>
		</div>
	</div>
	<div class="space-y-4">
		<p class="text-2xl font-extrabold md:text-3xl lg:text-3xl">Mission:</p>
		<p class="3xl:text-lg">
			Our goal with the club is to prepare members with tools and skills that can be used in their
			future careers. We accept anyone interested in learning more about computer science and
			computer information systems. By joining, students can establish connections with like-minded
			people and participate in activities that are both fun and applicable.
		</p>
	</div>
</div>
