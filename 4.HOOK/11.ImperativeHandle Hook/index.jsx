
const useRef = React.useRef;
const useImperativeHandle = React.useImperativeHandle;


function Test(props, ref) {


    useImperativeHandle(ref, () => {
        return {
            method() {
                console.log('Test method')
            }
        }
    }, []);


    return (<h1>useImperativeHandle</h1>)

};

const TestWrapper = React.forwardRef(Test);


function App() {

    const ref = useRef();

    return (<div>
        <TestWrapper ref={ref}></TestWrapper>
        <button onClick={() => {
            ref.current.method();
        }}>点击调用Test组件的method方法</button>
    </div>);

};