
import BetterLink from "../BetterLink.jsx"
import './Journalism.css';

export default function Journalism(props){
  
   return (<div style={{
     width:'100%',
     height:'100%',
     textAlign:'center'
   }}>
     <h3 className="title">新闻</h3>
     <div className="Journalism_Box">
       <ul className="box_ul">
         <BetterLink to={{name:'xinwen1'}}>新闻1</BetterLink>
         <BetterLink to={{name:'xinwen2'}}>新闻2</BetterLink>
         <BetterLink to={{name:'xinwen3'}}>新闻3</BetterLink>
       </ul>
       <div className="box_main">
         { props.children }
       </div>
     </div>
   </div>)
};