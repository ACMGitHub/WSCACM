<script>
	import { Carousel, Img, Heading } from 'flowbite-svelte';
	import { base } from '$app/paths';
	import images from '../routes/images.json';
</script>

<div class="grid md:grid-cols-3 -my-8">
	<div
		class="bg-[url(/images/circuit-board.jpeg)] bg-fixed bg-center flex flex-col items-center justify-center"
	>
		<img src="{base}/images/ACMLogo.png" alt="ACM Banner" class="w-4/5" />

		<h2
			class="pb-8 text-2xl font font-extrabold md:text-3xl lg:text:4xl text-slate-100 text-center"
		>
			Where ALL WSC Students are Welcome!
		</h2>
	</div>

	<div class="md:col-span-2 justify-between z-0">
		<div class="w-full lg:px-44">
			<Carousel
				class="flex h-[550px] justify-center items-center"
				{images}
				duration="7000"
				let:Controls
				let:Indicators
			>
				<Controls class="px-10 text-color-black" />
				<Indicators />
			</Carousel>
		</div>
		<p class="text-center text-xl py-10">
			WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields of
			interest. With a world-wide membership, ACM is a leading resource for computing professional
			and students working in various fields of information technology.
		</p>
	</div>
</div>
