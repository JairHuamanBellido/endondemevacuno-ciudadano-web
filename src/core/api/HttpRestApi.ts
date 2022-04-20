import axios from "axios";
const API_REST_ENDPOINT_BASE = process.env.NEXT_PUBLIC_API;
const HttpRestApi = axios.create({
    baseURL: API_REST_ENDPOINT_BASE,
});

export { HttpRestApi };