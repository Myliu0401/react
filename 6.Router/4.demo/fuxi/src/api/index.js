import axios from 'axios';

//创建实例
const Axios = axios.create({

});



//请求拦截器
Axios.interceptors.request.use((config) => {
    return config;
});


//响应拦截器
Axios.interceptors.response.use((response) => {
    return response.data;
});


export function getStudentList(params){
    return Axios({
      url: '/api/student',
      method: 'get',
      params
    })
} 