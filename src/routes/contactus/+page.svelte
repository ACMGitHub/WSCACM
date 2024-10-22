<script>
	import { base } from '$app/paths';
	import Card from '../../lib/components/Card.svelte';
</script>

<div class="mx-auto max-w-7xl gap-x-8 gap-y-20">
	<div class="max-w-2xl">
		<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
		<p class="mt-6 text-lg leading-8">
			No matter who you are, we want you to join us. As far as college clubs go, ACM is a truly
			special one. Our club focuses on all things technology and computers, however, you don't need
			to be good with computers to join our club. If you have any questions feel free to contact any
			of us.
		</p>
	</div>

	<p class="pt-20 font-bold text-xl md:text-3xl">2024 Officer Team</p>

	<div class="py-4 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16">
		<Card
			name="Dakota Gullicksen"
			title="President"
			email="kogull01@wsc.edu"
			avatarImage="{base}/images/officers/dakotaG.jpg"
			avatarLink="https://www.linkedin.com/in/dakota-w-gullicksen/"
		/>

		<Card
			name="Jayden Carper"
			title="Vice President"
			email="jacarp01@wsc.edu"
			avatarImage="{base}/images/officers/JaydenC.jpg"
			avatarLink="https://www.linkedin.com/in/jayden-carper-5a66622b1/"
		/>

		<Card
			name="Ajharul Islam Aunik"
			title="Secretary"
			email="ajauni01@wsc.edu"
			avatarImage="{base}/images/officers/Aunik.jpg"
			avatarLink="https://www.linkedin.com/in/ajharul-islam-aunik/"
		/>

		<Card
			name="Adah Heng"
			title="Treasurer"
			email="adheng01@wsc.edu"
			avatarImage="{base}/images/officers/AdahH.jpg"
			avatarLink="https://www.linkedin.com/in/adah-heng/"
		/>

		<Card
			name="Ona Mosadi"
			title="Marketing"
			email="onmosa01@wsc.edu"
			avatarImage="{base}/images/officers/OnaM.jpg"
			avatarLink="https://www.linkedin.com/in/onalennamosadi1/"
		/>

		<Card
			name="Enoch Atuahene"
			title="Historian"
			email="enatua01@wsc.edu"
			avatarImage="{base}/images/officers/EnochA.jpg"
			avatarLink="https://www.linkedin.com/in/kwameatuahene/"
		/>

		<Card
			name="Jeremy Wynia"
			title="Advisor"
			email="jewynia1@wsc.edu"
			avatarImage="{base}/images/officers/Jeremy_Wynia.jpg"
			avatarLink="https://www.linkedin.com/in/jeremy-wynia-66004943/"
		/>
	</div>
</div>
