import ctx from '../cxt.js';
import { useContext } from 'react';
export default function Login(props) {

    const context = useContext(ctx);
    window.aa = context
    return (<div style={{
        width: '100%',
        height: 'calc(100% - 60px)',
        backgroundColor: 'antiquewhite',
        textAlign: 'center'
    }}>
        <div>这是登录页</div>
        <button onClick={() => {

            const is = context.SetIS();

            //判断是登录还是退出登录
            if (is) {
                props.location.state ? props.history.push('/personalIfon') : props.history.push('/');
            } else {
                props.history.push('/');
            }

        }}>{context.isLogin ? '退出登录' : '登录'}</button>
    </div>);
};