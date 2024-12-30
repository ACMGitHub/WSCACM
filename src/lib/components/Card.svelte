<script>
	import { base } from '$app/paths';

	export let name = 'Name';
	export let title = 'Position';
	export let email = 'name@email.com';
	export let avatarImage = `${base}/images/officers/no-profile.png`; // avatar image
	export let avatarLink = ''; // linkedin profile
</script>

<div
	class="flex items-center gap-x-6 shadow-xl p-4 my-2 rounded-lg hover:scale-105 hover:bg-[#0f172ac6] hover:text-white duration-300"
>
	<img src={avatarImage} alt="Image of {name}" class="w-16 h-16 rounded-full object-cover" />

	<div>
		<h3 class="text-base font-semibold leading-7 tracking-tight">{name}</h3>
		<p class="text-sm font-semibold leading-6">{title}</p>
		<a href="mailto:{email}" class="hover:text-white hover:underline">{email}</a>
	</div>

	{#if avatarLink != ''}
		<div class="ml-auto">
			<a href={avatarLink} target="_blank">
				<img
					src="{base}/images/linkedin.png"
					alt={'Linkedin'}
					class="ml-auto w-10 h-10 rounded-full object-cover"
				/>
			</a>
		</div>
	{/if}
</div>
