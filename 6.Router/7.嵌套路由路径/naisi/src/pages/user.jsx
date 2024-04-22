import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import './user.css';
import routerObj from '../routerConfig.js';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        console.log(routerObj, routerObj.user.add, routerObj.user.delete)
    };



    render() {
        return (<div className='user' style={{
            display: 'flex',
        }}>
            <div className='user-sidebar' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'beige',
            }}>
                <NavLink /* to='/user/add' */ /* to={`${this.props.match.url}/add`} */ to={routerObj.user.add}>add</NavLink>
                <NavLink /* to='/user/delete' */ /* to={`${this.props.match.url}/delete`} */ to={routerObj.user.delete}>delete</NavLink>
            </div>
            <Switch>
                <Route /* path='/user/add' */ /* path={`${this.props.match.url}/add`} */ path={routerObj.user.add} component={Add}></Route>
                <Route /* path='/user/delete' */ /* path={`${this.props.match.url}/delete`} */ path={routerObj.user.delete} component={Delete}></Route>
            </Switch>
        </div>);
    }
};



function Add() {
    return (<div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#abcdef',
        textAlign: 'center'
    }}>
        <h1>user-Add</h1>
    </div>);
};



function Delete() {
    return (<div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(180, 98, 84)',
        textAlign: 'center'
    }}>
        <h1>user-Delete</h1>
    </div>);
};