<script>
	import { Gallery} from 'flowbite-svelte';

	const images = [
		{ alt: 'place holder', src: 'images/none_specific/2024_2025/clubFair.jpeg' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4477.JPG' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4480.JPG' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4552.jpg' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4556.jpg' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4641.jpg' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4672.jpg' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4673.jpg' },
		{ alt: 'place holder', src: 'images/none_specific/2023_2024/IMG_4686.jpg' }
	];
</script>
<!-- __layout.svelte -->
<script context="module">
  import { readdirSync } from 'fs';
  import { join } from 'path';

  const imagesDir = join('static', 'images', 'none_specific');
  const imageFolders = ['2024_2025', '2023_2024'];
  let images = [];

  for (const folder of imageFolders) {
    const folderPath = join(imagesDir, folder);
    const files = readdirSync(folderPath).map(file => `/images/none_specific/${folder}/${file}`);
    images = images.concat(files);
  }
</script>

<style>
  img {
    border: 2px solid black; 
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
</style>

<template>
  <p class="text-center text-2xl pb-8">
    WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields of interest. With a world-wide membership, ACM is a leading resource for computing professionals and students working in various fields of information technology.
  </p>
  <div class="gallery">
    {#each images as image}
      <img src={image} alt="Dynamic Image" />
    {/each}
  </div>
</template>

<p class="text-center text-2xl pb-8">
	WSC ACM Student Chapter offers the opportunity to meet peers and experts in many fields of
	interest. With a world-wide membership, ACM is a leading resource for computing professional and
	students working in various fields of information technology.
</p>
<Gallery items={images} class="grid gap-4 grid-cols-3" />