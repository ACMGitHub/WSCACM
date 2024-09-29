<script>
	import { A, Avatar, Heading, P } from 'flowbite-svelte';
	import { base } from '$app/paths';

	const avatarStyle = 'w-20 rounded-full';
</script>


<div class="bg-white py-8">
	<div class="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
		<div class="max-w-2xl">
			<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
			<p class="mt-6 text-lg pl-6 leading-8">
				No matter who you are, we want you to join us.
				As far as college clubs go, ACM is a truly special one. Our club focuses on all things
				technology and computers, however, you don't need to be good with computers to join our club.
				If you have any questions feel free to contact any of us.
			</p>
		</div>

		<p class="pt-20 font-bold text-xl md:text-3xl">2024 Ofiicer Team</p>

		<ol class="py-4 px-4 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16">
			<li>
				<div class="flex items-center gap-x-6 shadow-xl flex-row p-4 my-4 rounded hover:scale-105 duration-300 ">
					<Avatar href="https://www.linkedin.com/in/dakota-w-gullicksen/" target="_blank" src="{base}/images/officers/dakotaG.jpg" alt="Dakota Gullicksen" class={avatarStyle} />
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Dakota Gullicksen</h3>
						<p class="text-sm font-semibold leading-6">President</p>
						<a href="mailto:kogull01@wsc.edu">kogull01@wsc.edu</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center gap-x-6 shadow-xl flex-row p-4 my-4 rounded hover:scale-105 duration-300 ">
					<Avatar href="https://www.linkedin.com/in/jayden-carper-5a66622b1/" target="_blank" src="{base}/images/officers/JaydenC.jpg" alt="Jayden Carper" class={avatarStyle} />
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Jayden Carper</h3>
						<p class="text-sm font-semibold leading-6">Vice President</p>
						<a href="mailto:jacarp01@wsc.edu">jacarp01@wsc.edu</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center gap-x-6 shadow-xl flex-row p-4 my-4 rounded hover:scale-105 duration-300 ">
					<Avatar href="https://www.linkedin.com/in/ajharul-islam-aunik/" target="_blank" src="{base}/images/officers/Aunik.jpg" alt="Ajharul Islam Aunik" class={avatarStyle} />
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Ajharul Islam Aunik</h3>
						<p class="text-sm font-semibold leading-6">Secretary</p>
						<a href="mailto:ajauni01@wsc.edu">ajauni01@wsc.edu</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center gap-x-6 shadow-xl flex-row p-4 my-4 rounded hover:scale-105 duration-300 ">
					<Avatar href="https://www.linkedin.com/in/adah-heng/" target="_blank" src="{base}/images/officers/AdahH.jpg" alt="Adah Heng" class={avatarStyle} />
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Adah Heng</h3>
						<p class="text-sm font-semibold leading-6">Treasurer</p>
						<a href="mailto:adheng01@wsc.edu">adheng01@wsc.edu</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center gap-x-6 shadow-xl flex-row p-4 my-4 rounded hover:scale-105 duration-300 ">
					<Avatar href="#" src="{base}/images/officers/no-profile.png" alt="Tristin Patzel" class={avatarStyle} />
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Tristin Patzel</h3>
						<p class="text-sm font-semibold leading-6">Historian</p>
						<a href="mailto:trpatz01@wsc.edu">trpatz01@wsc.edu</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center gap-x-6 shadow-xl flex-row p-4 my-4 rounded hover:scale-105 duration-300 ">
					<Avatar href="https://www.linkedin.com/in/brandon-berger-ne/" target="_blank" src="{base}/images/officers/BrandonB.png" alt="Brandon Berger" class={avatarStyle} />
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Brandon Berger</h3>
						<p class="text-sm font-semibold leading-6">Recruiter</p>
						<a href="mailto:brberg05@wsc.edu">brberg05@wsc.edu</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center gap-x-6 shadow-xl flex-row p-4 my-4 rounded hover:scale-105 duration-300 ">
					<Avatar href="https://www.linkedin.com/in/jeremy-wynia-66004943/" target="_blank" src="{base}/images/officers/Jeremy_Wynia.jpg" alt="Jeremy Wynia" class={avatarStyle} />
					<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Jeremy Wynia</h3>
						<p class="text-sm font-semibold leading-6">Advisor</p>
						<a href="mailto:jewynia1@wsc.edu">jewynia1@wsc.edu</a>
					</div>
				</div>
			</li>

			
		</ol>

	</div>
</div>


<style>
	a {
		color: rgb(30 58 138);
		font-weight: bold;
	}
	a:hover {
		color: rgb(29 78 216);
	}
</style>
