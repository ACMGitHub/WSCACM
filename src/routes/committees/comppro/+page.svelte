<script>
	import { Heading, Hr } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="text-center" customSize="text-2xl font-extrabold  md:text-3xl lg:text-3xl"
	>Competitive Programming
</Heading>
<Hr class="my-8" />
<p>
	Competitive Programming is a new subcommittee added in 2022. This allows members to compete in
	online programming competitions. Most if not all competitions allow C, C++, C#, Python, and Java.
	Competitions can either be a group competition or individual competition. This gives you the
	opportunity to show off your programming skills and train your way of thinking.
</p>
<div class="flex flex-col md:flex-row gap-x-6">
<div class="flex-1">
<Heading tag="h3" class="text-align-left" customSize="text-lg font-extrabold m-4 md:text-xl lg:text-xl"
	>Rules
</Heading>
<!-- for some reason list-disc only needs to be in one spot for there to be bullet points -->
<ul>
	<li>At least one team captian to hold practices and look for competitions to participate in.</li>
	<li>Any one within ACM is allowed to participate.</li>
	<li>Be respectable to others and their skill level.</li>
</ul>
</div>
<div class="flex-1 justify-between">
<Heading tag="h3" class="text-align-left" customSize="text-lg font-extrabold m-4  md:text-xl lg:text-xl"
	>Recommendations
</Heading>
<ul>
	<li>Have weekly or biweekly practices/meetings that work for the most people.</li>
	<li>
		Just because someone can't make it to meetings doesn't mean they can't be part of Competitive
		Programming.
	</li>
	<li>
		Group people up for each practice at the start of the school year. Different groups each
		practice.
	</li>
</ul>
</div>
</div>
<Heading tag="h3" class="text-align-left" customSize="text-lg font-extrabold m-4  md:text-xl lg:text-xl"
	>Resources
</Heading>
<ul>
	<li><a href="https://codeforces.com/">Code Forces</a></li>
	<li><a href="https://leetcode.com/">Leet Code</a></li>
</ul>

<style>
	a {
		color: rgb(30 58 138);
		text-decoration: underline;
		font-weight: bold;
	}
	a:hover {
		color: rgb(29 78 216);
	}
</style>
