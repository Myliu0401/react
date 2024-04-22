import { useState } from 'react';
import './index.css';


export default function StudentSearchBar(props) {

    const [form, setForm] = useState({
        key: '', //关键字
        sex: -1, //性别
    });

    function myChange(event) {
        setForm({
            ...form,
            sex: +event.target.value
        });
    };

    return (<div className='form'>
        <label>关键字:<input type='text' value={form.key} onChange={(event) => {
            setForm({
                ...form,
                key: event.target.value
            });
        }} /></label>
        <div>性别:
            <label><input type='radio' checked={form.sex === -1} onChange={myChange} value={-1} />不限</label>
            <label><input type='radio' checked={form.sex === 0} onChange={myChange} value={0} />男</label>
            <label><input type='radio' checked={form.sex === 1} onChange={myChange} value={1} />女</label>
        </div>
        <button onClick={() => {
            props.onSearch && props.onSearch(form);
        }}>查询</button>
    </div>);
};



