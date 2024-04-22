class MyComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };



         /* setInterval(()=>{
          //  this.setState((a) => {
          //      console.log('+++++++++++++')
          //      return {
          //          number: this.state.number + 1
          //      }
          //  }, () => {
          //      console.log(this.state.number)
          //  });
          //  console.log('[][]')
          //  this.setState((a) => {
          //      console.log('+++++++++++++')
          //      return {
          //          number: this.state.number + 1
          //      }
          //  }, () => {
          //      console.log(this.state.number)
          //  });
//
          //  this.setState({
          //      number: this.state.number + 1
          //  });
          //  console.log(this.state.number)
          //  this.setState({
          //      number: this.state.number + 1
          //  })
 
         },2000) */
    };

    mybutton = () => {

        /* this.setState({
            number: this.state.number + 1
        }, () => {
            console.log(this.state.number)
        });
        this.setState({
            number: this.state.number + 1
        }, () => {
            console.log(this.state.number)
        });
        this.setState({
            number: this.state.number + 1
        }, () => {
            console.log(this.state.number)
        }); */


        /* this.setState((a)=>{
           
            return {
                number:this.state.number + 1
            }
        },()=>{
            console.log(this.state.number)
        });
     
        this.setState((a)=>{
            return {
                number:this.state.number + 1
            }
        },()=>{
            console.log(this.state.number)
        });
        this.setState((a)=>{
            return {
                number:this.state.number + 1
            }
        },()=>{
            console.log(this.state.number)
        }) */

       // this.a();
    
       this.state.number++
       this.setState(this.state)
    };



    a() {
        this.setState((a) => {
            console.log('+++++++++++++')
            return {
                number: this.state.number + 1
            }
        }, () => {
            console.log(this.state.number)
        });
        console.log('[][]')
        this.setState((a)=>{
            return {
                number:this.state.number + 1
            }
        },()=>{
            console.log(this.state.number)
        });
        this.setState((a)=>{
            return {
                number:this.state.number + 1
            }
        },()=>{
            console.log(this.state.number)
        })
    }


    render() {
        console.log('========')
        return (<div><span>{this.state.number}</span><button onClick={this.mybutton}>+</button></div>);
    }
}