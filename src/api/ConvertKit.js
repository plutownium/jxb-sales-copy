import axios from "axios";

export async function addSubscriber(firstName, email) {
    const url = "https://api.convertkit.com/v3/forms/<form_id>/subscribe    ";

    const res = await axios.post(url, { firstName, email });
    const { subscription } = res.data;
    return subscription;
}

export async function getForms() {
    const url = "https://api.convertkit.com/v3/forms?api_key=";
    const res = await axios.get(url);
    const { forms } = res.data;
    return forms;
}
