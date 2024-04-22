

import { useEffect, useState } from 'react';
import RouterContext from '../react-router/routerContext.js';
import matchPath from './matchPath.js';


export default function Router(props) {

    const [location, setLocation] = useState({ ...props.history.location });

    //开启监听路径的变化
    useEffect(() => {

        const cancelListening = props.history.listen((location, action) => {
            setLocation(location); // 刷新页面
        });

        return cancelListening; // 取消监听
    });


    return <RouterContext.Provider value={{
        history: props.history,
        location: props.location,
        match: matchPath('/', location.pathname)
    }}>
        {props.children}
    </RouterContext.Provider>

};