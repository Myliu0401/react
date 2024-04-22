


import Router from '../react-router/Router.jsx';
import createBrowserHistory from '../../naisi/src/history/createBrowserHistory.js';


export default function BrowserRouter(props){

      const { children, ...options } = props
    
      const history = createBrowserHistory({...options});

      return <Router history={history}>
        { props.children }
      </Router>
};