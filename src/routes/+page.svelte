<script>
	import { Carousel } from 'flowbite-svelte';
	import { base } from '$app/paths';
	import images from '../routes/images.json';
</script>

<div class="w-full h-full text-center">
	<div class="w-full h-full">
		<!-- Grid layout: stack on small screens, 3 columns on lg+ -->
		<div class="grid grid-cols-1 lg:grid-cols-3 h-full text-slate-100">
			<!-- Left: Centered logo and heading -->
			<div class="flex flex-col justify-center items-center h-full px-4 text-center">
				<img src="{base}/images/ACMLogo.png" alt="ACM Banner" class="max-w-md sm:max-w-sm" />
				<h2 class="text-2xl font-extrabold md:text-3xl lg:text-4xl mt-6">
					Where ALL WSC Students are Welcome!
				</h2>
			</div>

			<!-- Right: Carousel + Description -->
			<div class="col-span-2 flex items-center justify-center px-10">
				<div class="bg-slate-100 text-slate-900 rounded-lg shadow-lg p-10 max-w-4xl w-full">
					<Carousel class="flex justify-center mb-10" {images} duration="7000" />
					<p class="text-xl text-center">
						WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields
						of interest. With a world-wide membership, ACM is a leading resource for computing
						professionals and students working in various fields of information technology.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
