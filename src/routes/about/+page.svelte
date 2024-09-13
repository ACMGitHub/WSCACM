<script>
	import { Heading, Img, P } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div>
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl"
		>About Us</Heading
	>
	<div class='space-y-4'>
		<p>
			Wayne State College ACM club is a <b>student chapter</b> affiliated with the international ACM
			organization. Before we describe more about WSC ACM Student chapter, we would like to describe
			what the international ACM organization is.
		</p>
		<p>
			<b>The international ACM organization</b> is non-profit academic and scholarly organization aimed
			at connecting computing educators, researchers and professionals from around the globe. Headquartered
			in New-York, ACM is acknowledged as the world's largest scientific and educational computing association.
		</p>
		<p class="text-center italic">
			The organization has about 100,000 student as well as professional members from all around the
			world. ACM organization offers $1.5 million in scholarships.
		</p>
		<p class="text-center italic">
			There are different ACM conferences, research opportunities, competitions, webinars, and other
			educational and informational events open to the organization's members which are sponsored by
			ACM, colleges that participate in ACM, and by different Tech companies like Microsoft and
			Google.
		</p>
		<p>
			<b>Now, more about us!</b> WSC ACM Student Chapter has purposes and aims similar to the international
			ACM organization as explained on the above paragraph. Our local chapter is an educational and fun
			club. Our club focuses on all things technology and computers, however, students don't need to
			be good with computers to enjoy our club.
		</p>
		<!-- Frog -->
		<p>
			Unlike other clubs, <b>our club does a committee system</b> where you can work in small groups
			with projects more suited for you. We have committees such as the
			<b>Project Committee, Robotics Committee, Wedsite Committee, and Competitive Programming</b>.
			These committees are ran by student members with the intent for students to make their their
			own impact on campus. If you have an idea for a project, we are here to back you up on
			whatever you want to do. If they are you're looking for computers, friendship, business,
			design, or fresh ideas, this is the club for you.
		</p>
		<p>
			<b>Our goal</b> with the club is to have everyone to leave our club knowing a little more than
			before, establishing good connections with professionals and other students, and having students
			something to put on their resume.
		</p>
		<Img src="{base}/images/none_specific/2023_2024/groupPic.jpeg" alt="2024 ACM group picture" />
	</div>
</div>
