<script>
	import { Gallery} from 'flowbite-svelte';

	const images = [
		{ alt: 'place holder', src: 'images/IMG_4461.JPG' },
		{ alt: 'place holder', src: 'images/IMG_4477.JPG' },
		{ alt: 'place holder', src: 'images/IMG_4480.JPG' },
		{ alt: 'place holder', src: 'images/IMG_4552.jpg' },
		{ alt: 'place holder', src: 'images/IMG_4556.jpg' },
		{ alt: 'place holder', src: 'images/IMG_4641.jpg' },
		{ alt: 'place holder', src: 'images/IMG_4672.jpg' },
		{ alt: 'place holder', src: 'images/IMG_4673.jpg' },
		{ alt: 'place holder', src: 'images/IMG_4686.jpg' }
	];
</script>

<p class="text-center text-2xl pb-8">
	WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields of
	interest. With a world-wide membership, ACM is a leading resource for computing professional and
	students working in various fields of information technology.
</p>
<Gallery items={images} class="grid gap-4 grid-cols-3" />
