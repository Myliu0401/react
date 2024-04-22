class Test extends React.Component {
    constructor(props) {
        super(props);
    };




    render() {
        return (<From>
            <label>账号:<From.Input name={'account'} type='text'></From.Input></label><br></br>
            <label>密码:<From.Input name={'password'} type='password'></From.Input></label><br></br>
            <From.Button></From.Button>
        </From>);
    }
}