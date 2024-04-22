import { useState, useEffect } from 'react';

export default function My(props) {
    let unBlock;
    const [text, setText] = useState('');
    useEffect(() => {
        /* text && (unBlock = props.history.block('内容将不被保存'))
        return () => {
            unBlock && unBlock(); //取消阻塞
        } */
        
    }, [text]);

    return (<div className='div' >
        <input value={text} onChange={(e) => {
            setText(e.target.value);
        }} />
    </div>);
};