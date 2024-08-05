import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_REACT_APP_DEV_URL; // Ensure this is correct
const STRIPE_APP_KEY = import.meta.env.VITE_REACT_APP_STRIPE_APP_KEY;

const params = {
    headers: {
        Authorization: `Bearer ${STRIPE_APP_KEY}`,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}${url}`, params);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${STRIPE_APP_KEY}`,
    },
});
