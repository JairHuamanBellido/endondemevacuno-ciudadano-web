import axios from "axios";
const API_REST_ENDPOINT_BASE = process.env.NEXT_PUBLIC_API;
const API_REST_ENDPOINT_BASE_MOCK = process.env.NEXT_PUBLIC_API_MOCK;
const HttpRestApi = axios.create({
    baseURL: API_REST_ENDPOINT_BASE,
});

const HttpRestApiMock = axios.create({
    baseURL: API_REST_ENDPOINT_BASE_MOCK,
});


export { HttpRestApi, HttpRestApiMock };