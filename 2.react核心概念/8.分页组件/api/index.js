

async function qureGetData(paging) {
    return await axios.get(`/api/getData`,{
        params:{
            paging:paging
        }
    });
};