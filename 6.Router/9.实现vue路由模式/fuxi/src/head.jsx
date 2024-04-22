import { NavLink } from "react-router-dom";
import BetterLink from "./BetterLink.jsx";
import './head.css';

export default function Head(props){ 
    return <div className="head">
        <div className="head_left">
          <BetterLink to={{name:'home'}}>首页</BetterLink>
          <BetterLink to={{name:'journalism'}}>新闻</BetterLink>
        </div>
        <div className="head_right">
          <img className="logo" />
        </div>
    </div>
}