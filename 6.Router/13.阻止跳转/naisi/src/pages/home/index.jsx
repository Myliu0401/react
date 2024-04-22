import { useEffect } from 'react';


export default function Home() {

    useEffect(()=>{console.log('==========')},[])
    
    return (<div className='div' style={{
        backgroundColor: '#abcdef'
    }}>
        <h1>这是首页</h1>
    </div>);
}