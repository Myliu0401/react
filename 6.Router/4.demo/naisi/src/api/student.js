import axios from "./create.js";
import qs from 'query-string';

export async function queryStudents(obj = {}) {
    const query = qs.stringify(obj);
    console.log('/api/students' + (query ? `?${query}` : ''))
    return axios.get('/api/students' + (query ? `?${query}` : ''));
};

