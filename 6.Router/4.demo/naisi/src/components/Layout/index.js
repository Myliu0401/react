
import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        
    };


    //属性验证
    static propTypes = {
        header : PropTypes.element,
        aside: PropTypes.element,
    };



    render() {
        return (<div className='Layout-container'>
            <header  className='header'>
                {this.props.headers}
            </header>
            <div className='middle'>
                <div className='aside'>
                    {this.props.aside}
                </div>
                <main className='main'>
                    {this.props.children}
                </main>
            </div>
        </div>);
    };
};