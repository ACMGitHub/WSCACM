<script>
	import { Heading } from 'flowbite-svelte';

	let innerWidth = 0
</script>

<svelte:window bind:innerWidth />

<Heading
	tag="h1"
	class="pb-4 text-center"
	customSize="text-3xl font-extrabold md:text-2xl lg:text-3xl"
	>Meeting Times: Thursdays, 5:00 PM</Heading
>
<Heading
tag="h1"
class="pb-4 text-center"
customSize="text-3xl font-extrabold md:text-2xl lg:text-3xl"
>Location: Gardner Hall 115</Heading
>
<iframe
	title="ACM Calendar"
	src="https://calendar.google.com/calendar/embed?src=5b1a3bc8b9d72b829ec7243607f569e5a9b6550726c047e6965762819ec5aec9%40group.calendar.google.com&ctz=America%2FChicago"
	frameborder="0"
	scrolling="no"
	class="md:m-auto lg:m-auto w-full h-screen "
></iframe>
