import { withRouter } from 'react-router-dom';



function Link(props) {
    return <a href={props.to} onClick={(event) => {
      event.preventDefault();
      props.history.push(props.to)
    }}>{props.children}</a>
  };
  
export default withRouter(Link);