<script>
	import { goto } from '$app/navigation';
	import { addSubscriber } from '../api/ConvertKit';
	let name = '';
	let email = '';
	let error = '';

	async function trySubmit() {
		// if either name or email MIA, display error
		if (name.length === 0) {
			error = 'We need your first name!';
			return;
		} else if (email.length === 0) {
			error = 'We need your email!';
			return;
		} else if (name.length > 20) {
			error = 'Are you sure your name is more than 20 characters?';
			return;
		} else if (!isEmail(email)) {
			error = 'Invalid email. Did you make a typo?';
			return;
		} else {
			error = '';
		}
		const success = await addSubscriber(name, email);
		if (success) {
			// redirect to product lander
			goto('/change-your-life');
		} else {
			error = 'Something went wrong!';
		}
	}

	function isEmail(email) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return true;
		}
		return false;
	}

	function submitOnEnter(event) {
		if (event.key === 'Enter') {
			trySubmit();
		}
	}
</script>

<div class="flex flex-col centering">
	<h2 class="text-center">
		Give us your <span class="underline">best</span> email so we can send you our FREE report!
	</h2>
	<div class="flex flex-col-on-mobile input-container">
		<div class="m-2">
			<input
				bind:value={name}
				class="p-3"
				placeholder="Your First Name"
				type="text"
				on:keydown={submitOnEnter}
			/>
		</div>
		<div class="m-2">
			<input bind:value={email} class="p-3" placeholder="Your Email" on:keydown={submitOnEnter} />
		</div>
	</div>
	{#if error}
		<div>
			<p>Error: {error}</p>
		</div>
	{/if}
	<button
		class="cta-btn"
		on:click={() => {
			trySubmit(name, email);
		}}>Get My FREE Report</button
	>
</div>

<style>
	.cta-btn {
		color: white;
		font-size: 18px;
		margin: 12px;
		height: 64px;
		width: 218px;
		background-color: #d44445;
		border-radius: 12px;
	}

	.centering {
		justify-content: center;
		align-items: center;
	}

	.flex {
		display: flex;
	}

	.flex-col {
		flex-direction: column;
	}

	@media screen and (max-width: 800px) {
		.flex-col-on-mobile {
			flex-direction: column;
		}
	}

	.h-12 {
		height: 36px;
	}

	input {
		border-radius: 5px;
		border: 3px solid #ffd300;
		height: 24px;
		font-size: 18px;
	}

	.input-container {
		margin-bottom: 20px;
	}

	.m-2 {
		margin: 6px;
	}

	.p-3 {
		padding: 8px;
	}

	.underline {
		text-decoration: underline;
	}
</style>
