import React from 'react';

export default class Head extends React.Component {
    constructor(props) {
        super(props);
    };



    render() {
        return (<div className='head' style={{
            width: '100%',
            height: 60,
            backgroundColor: '#008c8c',
            textAlign: 'center'
        }}>这里是头部</div>);
    };
};