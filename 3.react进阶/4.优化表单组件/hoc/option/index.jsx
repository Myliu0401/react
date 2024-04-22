


function Option(Comp, myProps) {

   return class OptionHoc extends React.Component {
      constructor(props) {
         super(props);

      };

      //默认值
      static defaultProps = {
         datas: [],
      };

      

      //属性验证
      static propTypes = {
         datas: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            text: PropTypes.string
         })),
      };


      generates() {
         
         return this.props.datas.map((el, index) => {
            return (<Comp key={index} info={el} {...this.props}></Comp>);
         });
      };

      render() {
         return (<React.Fragment>{this.generates()}</React.Fragment>);
      };
   };


};