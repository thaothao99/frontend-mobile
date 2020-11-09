import axios from 'axios'

export const API_URL = "http://localhost:4000";
export async function callApi(method, endpoint, data) {
    try {
        const res = await axios[method](`${API_URL}/${endpoint}`, data);
        return res.data
    } catch (err) {
        return err.response.data
    }
}