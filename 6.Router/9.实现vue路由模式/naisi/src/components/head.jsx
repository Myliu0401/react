import LiLink from "../LiLink";
import BetterLink from '../BetterLink.jsx';



export default function Head(props) {
    return (<div style={{
        width: '100%',
        height: '60px',
        backgroundColor: '#abcdef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }}>
        {/* <LiLink to='/'>首页</LiLink> */}
        <BetterLink to={{ name: 'home' }}>首页</BetterLink>
        <ul>
            {/* <LiLink to='/Journalism'>新闻</LiLink>
            <LiLink to='/Journalism/xinwen2'>新闻2</LiLink>
            <LiLink to='/Journalism/xinwen3'>新闻3</LiLink> */}
            <BetterLink to={{ name: 'journalism' }}>新闻</BetterLink>
            <BetterLink to={{ name: 'xinwen2' }}>新闻2</BetterLink>
            <BetterLink to={{ name: 'xinwen3' }}>新闻3</BetterLink>
        </ul>

    </div>);
};