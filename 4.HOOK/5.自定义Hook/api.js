
//创建实例
const myAxios = axios.create({
    baseURL: 'https://www.baidu.com'

});


//响应拦截器
myAxios.interceptors.response.use((response) => {
    return {
        total: response.data.total,
        data: response.data.data,
    }
});


/**
 * 获取所有分页数据
 * @returns 
 */
async function totalPagingData() {
    return await myAxios.get('/api/totalPagingData');
};


/**
 * 获取分页数据
 * @param {*} page  第几页
 */
async function pagingData(page = 1) {
    return await myAxios.get(`/api/pagingData?page=${page}`);
};





