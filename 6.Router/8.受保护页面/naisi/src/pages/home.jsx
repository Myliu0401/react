import React from 'react';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (<div className='home' style={{
            backgroundColor: '#abcdef',
            height: 'calc(100% - 60px)',
            textAlign: 'center',
        }}>
            <h1>这是首页</h1>
        </div>);
    }
}