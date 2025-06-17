<script>
	import { Carousel } from 'flowbite-svelte';
	import { base } from '$app/paths';
	import images from '../routes/images.json';
</script>

<div class="grid grid-cols-3 bg-[url(/images/circuit-board.jpeg)] bg-center flex h-full text-center">
	<div class="m-auto">
		<img src="{base}/images/ACMLogo.png" alt="ACM Banner" class="w-4/5 mx-auto" />
		<h2 class="px-2 text-2xl font font-extrabold md:text-3xl lg:text:4xl text-slate-100">
			Where ALL WSC Students are Welcome!
		</h2>
	</div>

	<div class="col-span-2 space-y-10 bg-slate-100 py-10">
		<div class="lg:px-44 mx-auto">
			<Carousel class="flex justify-center" {images} duration="7000" />
		</div>
		<div class="text-xl">
			WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields of
			interest. With a world-wide membership, ACM is a leading resource for computing professional
			and students working in various fields of information technology.
		</div>
	</div>
</div>
