
class A {

}


class TypeCheck extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    };


    //静态类型检查的属性对象
    static propTypes = {
        a: PropTypes.number.isRequired,    //必须是数字类型且不能为空
        b: PropTypes.string,  //必须是字符串类型
        c: PropTypes.array,   //必须是数组类型
        d: PropTypes.object,  //必须是对象类型
        e: PropTypes.bool,    //必须是布尔类型
        f: PropTypes.func,    //必须是函数类型
        g: PropTypes.node,    //必须是可渲染的
        h: PropTypes.element,  //必须是react元素
        I: PropTypes.elementType,  //必须是类、构造函数
        j: PropTypes.instanceOf(A), //原型链上必须有A
        k: PropTypes.oneOf(['男', '女']), //只能是数组中的其中一个
        l: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //类型只能是数组中的其中一个
        m: PropTypes.arrayOf(PropTypes.number),  //必须是数组且每一项必须是该类型
        n: PropTypes.objectOf(PropTypes.string), //必须是对象且每个属性必须是该类型
        o: PropTypes.shape({
            a: PropTypes.string,
            b: PropTypes.string
        }),    //必须是对象，如果对象有包含该属性，那么类型或值必须一致
        p: PropTypes.exact({
            ab: PropTypes.string,
            cd: PropTypes.number,
        }),  //必须是对象，且属性必须是一致的
        q: function (props, propName, componentName) {

        }
    };

 

    render() {
        const I = this.props.I
        console.log(I,'=================')
        return (<div>
            {/*  a:{this.props.a}<br></br>
            b:{this.props.b}<br></br>
            c:{this.props.c}<br></br>
            d:{this.props.d}<br></br>
            e:{this.props.e}<br></br>
            f:{this.props.f}<br></br>
            g:{this.props.g}<br></br>
            h:{this.props.h}<br></br>
            i:{this.props.i}<br></br>
            j:{this.props.j}<br></br>
            k:{this.props.k}<br></br>
            l:{this.props.l}<br></br>
            m:{this.props.m}<br></br>
            n:{this.props.n}<br></br>
            o:{this.props.o}<br></br>
            p:{this.props.p}<br></br> */}
            <I></I>
        </div>);
    }
}