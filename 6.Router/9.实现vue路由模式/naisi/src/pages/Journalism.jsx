
export default function Journalism(props) {
    console.log(props.children, '======')
    return (<div className='div' style={{
        backgroundColor: 'aliceblue'
    }}>
        <h1>Journalism</h1>
        {props.children}
    </div>);
}