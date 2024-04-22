import PropTypes from "prop-types";
import './totalPaging.css';

export default function TotalPaging(props) {


    return (<div className='totalPaging'>
        <span className='span active'>{props.current}</span>/<span className='span'>{props.totalPaging}</span>
    </div>);
};


//属性验证
TotalPaging.propTypes = {
    current: PropTypes.number,
    totalPaging: PropTypes.number
};