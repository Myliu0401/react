

import React from 'react';
import { NavLink } from 'react-router-dom';
import cxt from '../cxt.js';
import './head.css';

export default class Head extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (<cxt.Consumer>
            {(context) => {
                return (<div className='head'>
                    <ul>
                        <NavLink to='/public'>公共页</NavLink>
                        <NavLink to='/personalIfon'>个人信息页</NavLink>
                    </ul>
                    <NavLink to='/login'>{context.isLogin ? '退出登录' : '登录'}</NavLink>
                </div>);
            }}

        </cxt.Consumer>);
    };
};