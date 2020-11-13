import axios from 'axios'
import { AsyncStorage } from 'react-native';
const config = {
    headers: {
        token: AsyncStorage.getItem('token')
    }
}
export const API_URL = "http://localhost:4000";
export async function callApi(method, endpoint, data) {
    try {
        const res = await axios[method](`${API_URL}/${endpoint}`, data, config);
        return res.data
    } catch (err) {
        return err.response.data
    }
}