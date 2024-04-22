import { useState, useEffect } from 'react';
import RouterContext from './routerContext.js';
import matchPath from './matchPath.js';

export default function Router(props) {


    const [location, setLocation] = useState(props.history.location);

    //开启监听路径的变化
    useEffect(() => {


        /**
         * location 为跳转目标的location对象
         * action   为类型 如：POP
         */
        const unListen = props.history.listen((location, action) => {
            setLocation(location); //刷新页面
        });


        return unListen; //用于取消监听
    }, []);

    

    return <RouterContext.Provider value={{
        history: props.history,
        location,
        match: matchPath('/', location.pathname)
    }}>
        {props.children}
    </RouterContext.Provider>

};