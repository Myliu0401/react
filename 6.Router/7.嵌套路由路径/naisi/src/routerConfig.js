//路由路径的配置文件


const router = {
    user: {
        root: '',
        par: {
            naisi: '',
            misi: '',
            root: ''
        },
        add: '',
        delete: '',
    }
};


function recursionRouter(router, str = '') {

    for (let prop in router) {

        if (prop === 'root') {
            router[prop] = str ? str : str + `/${prop}`
        } else if (typeof (router[prop]) === 'object') {
            const str1 = router[prop].root ? router[prop].root : str + `/${prop}`;
            recursionRouter(router[prop], str1);
        } else {
            router[prop] = str + `/${prop}`;
        }

    }
};


recursionRouter(router);

export default router;