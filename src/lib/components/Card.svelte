<script>
	import { base } from '$app/paths';

    export let name = "Name";
    export let title = "Position";
    export let email = "name@email.com";
    export let avatarImage = "#"; // avatar image
    export let avatarLink = "#"; // linkedin profile
  </script>
  
  <div class="flex items-center gap-x-6 shadow-xl p-4 my-2 rounded-lg group hover:scale-105 hover:bg-[#0f172ac6] hover:text-white duration-300">
    <img src={avatarImage} alt="Imaga of {name}" class="w-16 h-16 rounded-full object-cover" />
    
    <div>
      <h3 class="text-base font-semibold leading-7 tracking-tight">{name}</h3>
      <p class="text-sm font-semibold leading-6">{title}</p>
      <a href="mailto:{email}" class="text-blue-600 group-hover:text-white">{email}</a>
    </div>

	<div class="ml-auto">
		<a href={avatarLink} target="_blank">
			<img
				src="{base}/images/linkedin.png"
				alt={'Linkedin'}
				class="ml-auto w-10 h-10 rounded-full object-cover"
			/>
		</a>
	</div>
</div>
