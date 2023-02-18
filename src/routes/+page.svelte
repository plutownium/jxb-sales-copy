<script>
	import BlueBox from '../lib/box/BlueBox.svelte';
	import RedBox from '../lib/box/RedBox.svelte';
	import WhiteBox from '../lib/box/WhiteBox.svelte';
	import EmailCapture from '../lib/EmailCapture.svelte';
	import AttentionGrabber from '../lib/text/AttentionGrabber.svelte';
	import SqueezeHeadline from '../lib/text/SqueezeHeadline.svelte';
</script>

<main class="">
	<!-- squeeze page  -->
	<div class="always-margins always-top-margin">
		<SqueezeHeadline />
		<BlueBox>
			<p>
				Learn about the day of a junior developer who started his role <span class="underline"
					>three weeks</span
				> ago.
			</p>
			<p>
				Find out what the work day of a senior developer with only <span class="underline"
					>four years</span
				> of experience is like.
			</p>
			<p>
				And finally discover what it’s like to be a <span class="underline">lead developer</span> who
				manages twelve other programmers!
			</p>
		</BlueBox>
		<WhiteBox>
			<div class="h-24 center-stuff">
				<AttentionGrabber bolded="PLEASE NOTE:"
					><span class="">You <span class="underline">won't</span> find this on YouTube!</span
					></AttentionGrabber
				>
			</div>
		</WhiteBox>
		<BlueBox>
			<div class="flex-center-spacer">
				<EmailCapture />
			</div>
		</BlueBox>
	</div>
</main>

<style>
	.flex-center-spacer {
		border: 2px solid salmon;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	p {
		font-size: 20px;
	}

	.always-top-margin {
		margin-top: 20px;
	}

	.always-margins {
		margin: 0px 100px 150px 100px;
	}

	@media screen and (max-width: 1100px) {
		.always-margins {
			margin: 0 40px 150px 40px;
		}
	}

	@media screen and (max-width: 800px) {
		.always-margins {
			margin: 0 30px 150px 30px;
		}
	}

	@media screen and (max-width: 500px) {
		.always-margins {
			margin: 0 20px 150px 20px;
		}
	}

	.h-24 {
		height: 48px;
	}

	.center-stuff {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.underline {
		text-decoration: underline;
	}
</style>
