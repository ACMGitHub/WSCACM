<script>
	import { Carousel } from 'flowbite-svelte';
	import { base } from '$app/paths';
	import images from '../routes/images.json';
</script>

<div class="flex bg-[url(/images/circuit-board.jpeg)] bg-center h-full items-center text-center">
	<div class="w-4/5">
		<img src="{base}/images/ACMLogo.png" alt="ACM Banner" class="w-4/5 mx-auto" />
		<h2 class="text-2xl font font-extrabold md:text-3xl lg:text:4xl text-slate-100">
			Where ALL WSC Students are Welcome!
		</h2>
	</div>

	<div class="space-y-10 bg-slate-100 py-30">
		<div class="lg:px-44 mx-auto">
			<Carousel class="flex justify-center" {images} duration="7000" />
		</div>
		<div class="text-center text-xl">
			WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields of
			interest. With a world-wide membership, ACM is a leading resource for computing professional
			and students working in various fields of information technology.
		</div>
	</div>
</div>
