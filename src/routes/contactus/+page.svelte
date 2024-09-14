<script>
	import { A, Avatar, Heading, P } from 'flowbite-svelte';
	import { base } from '$app/paths';

	const avatarStyle = 'w-20 rounded-full';
</script>

<div>
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-5xl"
		>Contact Us</Heading
	>
	<div class="text-base space-y-4">
		<p>No matter who you are, we want you to join us.</p>
		<p>
			As far as college clubs go, ACM is a truly special one. Our club focuses on all things
			technology and computers, however, you don't need to be good with computers to enjoy our club.
		</p>
		<p>If you have any questions feel free to contact any of us.</p>
	</div>

	<div class="w-fit mx-auto pt-4 space-y-4">
		<Heading tag="h1" customSize="text-xl font-extrabold  md:text-2xl lg:text-3xl"
			>2024 Officer Team</Heading
		>
		<div class="flex items-center">
			<Avatar src="{base}/images/officers/dakotaG.jpg" alt="Dakota Gullicksen" class={avatarStyle} />
			<div class="pl-2">
				<p class="font-bold">Dakota Gullicksen - President</p>
				<a href="mailto:kogull01@wsc.edu">kogull01@wsc.edu</a>
			</div>
		</div>

		<div class="flex items-center">
			<Avatar src="{base}/images/officers/JaydenC.jpg" alt="Jayden Carper" class={avatarStyle} />
			<div class="pl-2">
				<p class="font-bold">Jayden Carper - Vice President</p>
				<a href="mailto:jacarp01@wsc.edu">jacarp01@wsc.edu</a>
			</div>
		</div>

		<div class="flex items-center">
			<Avatar src="{base}/images/officers/Aunik.jpg" alt="Ajharul Islam Aunik" class={avatarStyle} />
			<div class="pl-2">
				<p class="font-bold">Ajharul Islam Aunik - Secretary</p>
				<a href="mailto:ajauni01@wsc.edu">ajauni01@wsc.edu</a>
			</div>
		</div>
		<!-- Rabbit -->

		<div class="flex items-center">
			<Avatar src="{base}/images/officers/AdahH.jpg" alt="Adah Heng" class={avatarStyle} />
			<div class="pl-2">
				<p class="font-bold">Adah Heng - Treasurer</p>
				<a href="mailto:adheng01@wsc.edu">adheng01@wsc.edu</a>
			</div>
		</div>

		<div class="flex items-center">
			<Avatar src="{base}/images/officers/no-profile.png" alt="Tristin Patzel" class={avatarStyle} />
			<div class="pl-2">
				<p class="font-bold">Tristin Patzel - Historian</p>
				<a href="mailto:trpatz01@wsc.edu">trpatz01@wsc.edu</a>
			</div>
		</div>

		<div class="flex items-center">
			<Avatar src="{base}/images/officers/BrandonB.png" alt="Brandon Berger" class={avatarStyle} />
			<div class="pl-2">
				<p class="font-bold">Brandon Berger - Recruiter</p>
				<a href="mailto:brberg05@wsc.edu">brberg05@wsc.edu</a>
			</div>
		</div>

		<div class="flex items-center">
			<Avatar src="{base}/images/officers/Jeremy_Wynia.jpg" alt="Jeremy Wynia" class={avatarStyle} />
			<div class="pl-2">
				<p class="font-bold">Jeremy Wynia - Advisor</p>
				<a href="mailto:jewynia1@wsc.edu">jewynia1@wsc.edu</a>
			</div>
		</div>
	</div>
</div>

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
