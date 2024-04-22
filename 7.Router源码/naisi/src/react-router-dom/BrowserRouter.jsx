import { useState, useEffect } from 'react';
import Router from '../react-router/Router.jsx';
import createBrowserHistory from '../history/createBrowserHistory.js';

export default function BrowserRouter(props) {

    const history = createBrowserHistory({ ...props });
    window.my = history
    return <Router history={history}>
        {props.children}
    </Router>

};