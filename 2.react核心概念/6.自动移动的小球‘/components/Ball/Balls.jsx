class Balls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ballInfoes: [],
        };


        const timer = setInterval(() => {
            const infoes = {
                left: random(500, 100),
                top: random(500, 100),
                bg: `rgb(${random(200, 10)},${random(200, 10)},${random(200, 10)})`,
                xSeed: random(100, 10),
                ySeed: random(100, 10),
            };

            this.setState({
                ballInfoes: [...this.state.ballInfoes, infoes]
            });

            if (this.state.ballInfoes.length === 30) {
                clearInterval(timer);
            }
        }, 1000);
    };


    render() {
        const res = this.state.ballInfoes.map((el, index) => {
            return (<Ball key={index} xSeed={el.xSeed} ySeed={el.ySeed} bg={el.bg} Left={el.left} Top={el.top}></Ball>);
        });
        return (<ul>{res}</ul>);
    }
}