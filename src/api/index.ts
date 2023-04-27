import axios from "axios";
import {API_URL} from "@constants/api";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
});

export const getApiCharacters = async (page: number) => {
    try {
        const { data } = await instance.get(`${API_URL.getCharactersByPage}${page}`);
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const getApiSingleCharacters = async (id: string) => {
    try {
        const { data } = await instance.get(`${API_URL.getCharacterById}${id}`);
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
};