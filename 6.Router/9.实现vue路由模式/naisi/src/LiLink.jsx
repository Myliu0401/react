import { withRouter } from 'react-router-dom';


export default withRouter(function LiLink(props) {
    console.log(props)
    return (<li onClick={() => {
        props.history.push(props.to);
    }}>{props.children}</li>);
});