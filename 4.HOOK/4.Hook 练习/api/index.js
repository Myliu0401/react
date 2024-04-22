
//创建一个实例
const myAxios = axios.create({
    baseURL: 'https://www.baidu.com'
});



async function apiPage(page) {
    return await myAxios.get(`/api/pagingData?page=${page}`);
};