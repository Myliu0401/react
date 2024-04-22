
import React from 'react';
import { Link } from 'react-router-dom';

export default class Head extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (<div className='head' style={{
            width: '100%',
            height: 'calc(60px)',
            backgroundColor: '#abcdef',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <Link to='/'>首页</Link>
            <Link to='/naisi1'>naisi</Link>
            <Link to='/nice'>nice</Link>
        </div>);
    };
}