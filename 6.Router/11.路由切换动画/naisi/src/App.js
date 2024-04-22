import Head from './components/head/index.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import TransitionRouter from './transitionRouter.jsx';
import Home from './pages/home/index.jsx';
import News from './pages/news/index.jsx';
import Nba from './pages/nba/index.jsx';
const classNames = {
  enter: 'animate__animated animate__bounceInRight animate__fast',
  exit: 'animate__animated animate__bounceOutLeft animate__fast'
}

function App() {
  return (
    <div className="App">
      <Router>
        <Head></Head>
        <div className='outerLayer'>
          <TransitionRouter path='/' exact component={Home} timeout={500} classNames={classNames} mountOnEnter={true} unmountOnExit={true}></TransitionRouter>
          <TransitionRouter path='/news' component={News} timeout={500} classNames={classNames} mountOnEnter={true} unmountOnExit={true}></TransitionRouter>
          <TransitionRouter path='/nba' component={Nba} timeout={500} classNames={classNames} mountOnEnter={true} unmountOnExit={true}></TransitionRouter>
        </div>

      </Router>
    </div>
  );
};

export default App;
