import axios from 'axios';

export async function addSubscriber(firstName, email) {
	try {
		// form id is 4851091
		const url = 'https://api.convertkit.com/v3/forms/4851091/subscribe    ';

		const res = await axios.post(url, { firstName, email });
		const { subscription } = res.data;
		console.log(subscription);
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

export async function getForms() {
	const url = 'https://api.convertkit.com/v3/forms?api_key=';
	const res = await axios.get(url);
	const { forms } = res.data;
	return forms;
}
