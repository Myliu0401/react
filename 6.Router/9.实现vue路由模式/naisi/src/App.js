import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from './RootRouter.jsx'
import Head from './components/head.jsx';

function App() {
  return (
    <Router>
       <Head></Head>
       <RootRouter></RootRouter>
    </Router>
  );
}

export default App;
