import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouterGuard from './RouterGuard.jsx';
import Page1 from './pages/page1/index.jsx';
import Page2 from './pages/page2/index.jsx';
import MyNav from './components/mynav/index.jsx';
import resetScroll from './resetScroll.js';



function App() {
  return (
    <RouterGuard isMonitor onChange={(frontLocation, afterLocation, action, cancelListening) => {
      if (frontLocation.pathname !== afterLocation.pathname) {
        clearInterval(window.tirem);
        const html = document.documentElement;
        const juli = html.scrollTop
        window.tirem = resetScroll({
          currentValue: juli,
          targetValue: 0,
          mode: 'bounceIn',
          callback(value) {
            html.scrollTop = juli - Math.abs(value);
          }
        });
      }

    }} isBlock handleConfirm={(frontLocation, afterLocation, action, msg, commit) => {
      commit(true);
    }} blockNews='秘书秘书'>
      <MyNav></MyNav>
      <div className='contner'>
        <Route path='/page1' component={Page1}></Route>
        <Route path='/page2' component={Page2}></Route>
      </div>
    </RouterGuard>
  );
};

export default App;
