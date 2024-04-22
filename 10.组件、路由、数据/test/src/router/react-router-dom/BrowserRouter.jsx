
import createBrowserHistory from '../history/createBrowserHistory.js';
import Router from '../react-router/Router.jsx';


export default function BrowserRouter(props){
    const history = createBrowserHistory(props);
    window.myHistory = history
    return (<Router history={history}>
      { props.children }
    </Router>);

};