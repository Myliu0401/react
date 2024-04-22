import { useState } from 'react';
import Index from './index.jsx';

export default function Test() {
    const [n, setN] = useState(1);
    return (<Index current={n} total={230} capacity={10} displayPages={10} handleCha={(value) => {
        setN(+value)
    }}></Index>);
};