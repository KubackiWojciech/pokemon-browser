import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    
})