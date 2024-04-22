import RootRouter from "./RootRouter.jsx";
import Head from "./head.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout.jsx';

function App() {
  return (<Router>
    <Layout header={<Head></Head>}>
      <RootRouter></RootRouter>
    </Layout>
  </Router>);
}

export default App;
