<script>
	import { Gallery } from 'flowbite-svelte';

	const images = [
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/clubFair.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/bm3.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/IMG_2382.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/IMG_2389.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/IMG_2400.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/bm1.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/dqcheck.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/chaosturn.jpg' },
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/bm5.jpeg' }
	];
</script>

<p class="text-center text-2xl pb-8">
	WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields of
	interest. With a world-wide membership, ACM is a leading resource for computing professional and
	students working in various fields of information technology.
</p>
<Gallery items={images} class="grid gap-4 grid-cols-3" />
