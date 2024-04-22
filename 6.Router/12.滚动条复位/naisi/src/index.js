
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import resetScroll from './resetScroll.js';
window.resetScroll = resetScroll;

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

