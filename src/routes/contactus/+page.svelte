<script>
	import { base } from '$app/paths';
	import Card from '../../lib/components/Card.svelte';
</script>

<div class="content-center mx-12 md:mx-24 lg:mx-36 gap-x-8 gap-y-20">
	<div>
		<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
		<p class="mt-6 text-lg leading-8">
			No matter who you are, we want you to join us. As far as college clubs go, ACM is a truly
			special one. Our club focuses on all things technology and computers, however, you don't need
			to be good with computers to join our club. If you have any questions feel free to contact any
			of us.
		</p>
	</div>

	<p class="pt-10 font-bold text-xl md:text-3xl">2024 Officer Team</p>

	<div class="py-4 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16">
		<Card
			name="Nicolas Tagliafichi"
			title="President"
			email="nitagl01@wsc.edu"
			avatarImage="{base}/images/officers/NicolasTagliafichi.jpg"
			avatarLink="https://www.linkedin.com/in/nicolas-tagliafichi/"
		/>

		<Card
			name="Ona Mosadi"
			title="Vice President"
			email="onmosa01@wsc.edu"
			avatarImage="{base}/images/officers/OnaM.jpg"
			avatarLink="https://www.linkedin.com/in/onalennamosadi1/"
		/>

		<Card
			name="Heidi Taylor"
			title="Secretary"
			email="hetayl01@wsc.edu"
			avatarImage="{base}/images/officers/heidiT.jpg"
			avatarLink="https://www.linkedin.com/in/heidi-taylor-/"
		/>

		<Card
			name="Rafael Negrete Fonseca"
			title="Treasurer"
			email="ranegr01@wsc.edu"
			avatarImage="{base}/images/officers/RafN.jpg"
			avatarLink="https://www.linkedin.com/in/rafael-negrete-88b042299/"
		/>

		<!-- <Card
			name="Adah Heng"
			title="Marketing"
			email="adheng01@wsc.edu"
			avatarImage="{base}/images/officers/AdahH.jpg"
			avatarLink="https://www.linkedin.com/in/adah-heng/"
		/> -->

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
