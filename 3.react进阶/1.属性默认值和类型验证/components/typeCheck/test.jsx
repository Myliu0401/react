class Test extends React.Component {
    constructor(props) {
        super(props);
console.log(A,'===========')

        this.state = {
            a: 1,
            b: '2',
            c: [3],
            d: { a1: 123 },
            e: false,
            f: () => { },
            g: 'fsa',
            h: <h1></h1>,
            i1: function Comp() {
                console.log('+++++++++++')
                return (
                    <div>
                        <h1>Comp</h1>
                    </div>
                );
            },
            j: new A(),
            k: '女',
            l: 123,
            m: [1],
            n: { a: '1' },
            o: {
                a: '1',
                b: '女孩'
            },
            p: {
                ab: '123',
                cd: 456
            },

        }
    };


    render() {
        return (<TypeCheck a={this.state.a} b={this.state.b} c={this.state.c} d={this.state.d}
            e={this.state.e} f={this.state.f} g={this.state.g} h={this.state.h} I={this.state.i1} j={this.state.j} k={this.state.k}
            l={this.state.l} m={this.state.m} n={this.state.n} o={this.state.o} p={this.state.p}></TypeCheck>);
    }



};