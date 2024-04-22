class Test extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            imgSrcs: ['https://img0.baidu.com/it/u=4076493291,331486562&fm=26&fmt=auto',
                'https://img0.baidu.com/it/u=1324019691,3896841313&fm=26&fmt=auto',
                'https://img0.baidu.com/it/u=1964839344,3088734304&fm=26&fmt=auto',
                /* 'https://img0.baidu.com/it/u=1377351719,1863175279&fm=26&fmt=auto',
                'https://img0.baidu.com/it/u=725977202,1962682306&fm=26&fmt=auto' */],
        }
    };



    render() {    
        
        return (<Banner
            imgSrcs={this.state.imgSrcs}
        ></Banner>);
    }
};