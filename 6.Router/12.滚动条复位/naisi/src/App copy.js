import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page1 from './pages/page1/index.jsx';
import Page2 from './pages/page2/index.jsx';
import MyNav from './components/mynav/index.jsx';
import withScroll from './withScroll.jsx';

const ResetScroll1 = withScroll(Page1);
const ResetScroll2 = withScroll(Page2);


function App() {
  return (
    <Router>
      <MyNav></MyNav>
      <div className='contner'>
        <Route path='/page1' component={/* ResetScroll1 */Page1}></Route>
        <Route path='/page2' component={/* ResetScroll2 */Page2}></Route>
      </div>
    </Router>
  );
};

export default App;
