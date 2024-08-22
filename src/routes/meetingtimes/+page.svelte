<script>
	import { Heading } from 'flowbite-svelte';

	let innerWidth = 0;
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
	customSize="text-3xl font-extrabold md:text-2xl lg:text-3xl">Location: Gardner Hall 115</Heading
>

<iframe
	title="ACM Calendar"
	src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&title=ACM%20Meetings%20and%20Events&src=NWIxYTNiYzhiOWQ3MmI4MjllYzcyNDM2MDdmNTY5ZTVhOWI2NTUwNzI2YzA0N2U2OTY1NzYyODE5ZWM1YWVjOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWg3NG41dXFiOXBlZXFzbmhtOGpxaTVpdmdma2lhNjhAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E&color=%23B39DDB"
	style="border-width:0"
	frameborder="0"
	scrolling="no"
	class="md:m-auto lg:m-auto w-full h-screen"
></iframe>
