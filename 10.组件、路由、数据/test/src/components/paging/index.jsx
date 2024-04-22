
import './index.css';
import { useState } from 'react';

/**
 * current      当前页
 * selection    数组，存储每页几条数据
 * pageSize     每页显示条数
 * total        总数据量
 * panelNumber  最多显示多少个页码
 * change       当前页发生变化时触发的函数
 * @param {Object} props 
 * @returns 
 */
export default function Paging(props) {


  /* const [ifon, setIfon] = useState({
       isOpen: false
  });
 */

  return (<div className={`paging ${props.classNames ? props.classNames : ''}`}>

    {/* <span className='paging_text'>共 <span>{props.total}</span> 条数据</span> */}

    {/* <div className='paging_selection'>
      <span 
      className='selection_span' 
      onClick={()=>{
        setIfon({...ifon,isOpen:!ifon.isOpen})
      }}
      >{ props.pageSize }/页</span>

      <i className='boxIcon'>{'>'}</i>

      <ul className={`paging_selectionBox ${ifon.isOpen ? 'open' : ''}`}>
        {selections(props.selection, props, ifon, setIfon)}
      </ul>

    </div> */}

    <div className="paging_pagArea">
      <div className='direction'>
        <span className={`direction_item ${props.current <= 1 ? 'disable' : ''}`} 
        onClick={()=>{props.onChange && props.current !== 1 && props.onChange(1)}}
        >{'<<'}</span>
        <span className={`direction_item item1 ${props.current <= 1 ? 'disable' : ''}`} 
        onClick={()=>{props.onChange && props.current !== 1 && props.onChange(props.current - 1)}}
        >{'<'}</span>
      </div>
      <ul className="pagArea_selectionBox">
        { pages(props) }
      </ul>
      <div className='direction'>
        <span className={`direction_item item1 ${props.current >= pageCount(props) ? 'disable' : ''}`} 
        onClick={()=>{props.onChange && props.current !== pageCount(props)  && props.onChange(props.current + 1)}}
        >{'>'}</span>
        <span className={`direction_item ${props.current >= pageCount(props) ? 'disable' : ''}`} 
        onClick={()=>{props.onChange &&  props.current !== pageCount(props) && props.onChange(pageCount(props))}}
        >{'>>'}</span>
      </div>
    </div>

    {/* <div className="paging_goToArea">
      <span className='paging_text'>前往</span>
      <input 
             className='selection_input' 
             value={ifon.current}
             onChange={(e)=>{
                  setIfon({
                    ...ifon,
                    current: e.target.value
                  }) 
             }} 
             onKeyUp={(event)=>{
               if(event.keyCode === 13){
                 props.onChange && props.onChange(event.target.value > pageCount(props) ? pageCount(props) : event.target.value)
                 setIfon({
                  ...ifon,
                  current: event.target.value > pageCount(props) ? pageCount(props) : event.target.value
                }) 
               }}} 
      />
      <span className='paging_text'>页</span>
    </div> */}

  </div>);
};


function selections(arr, props) {
  if (!Array.isArray(arr)) {
    return null;
  };
  if (!arr.includes(props.pageSize)) {
    throw new Error('selection数组中必须有pageSize这个值')
  };
  return arr.map((item, index) => {
    return (<li className={`selectionBox_item ${+item === +props.pageSize ? 'item_active' : ''}`} key={index} onClick={()=>{
      props.onPages && props.onPages(item)
    }}>{item}/页</li>);
  });
};

// 最小页
function minimum(props) {

  let surplus = props.current - Math.floor(props.panelNumber / 2); // 当前显示最小页数
  
  return surplus < 1 ? 1 : surplus;

};

// 最大页
function maximum(props) {

  const min = minimum(props); // 当前显示的最小页

  let max = (min + props.panelNumber - 1); // 当前显示的最大页

  const maximumPages = pageCount(props); // 总页数

  
  return max > maximumPages ? maximumPages : max;

};

// 总页数
function pageCount(props) {
  return Math.ceil(props.total / props.pageSize); // 总页数
};


function pages(props){
    const arr = [];
    for(let i = minimum(props); i <= maximum(props); i++){
       arr.push(<li className={`item ${i===props.current ? 'active' : ''}`} key={i} onClick={()=>{
        props.onChange && props.onChange(i)
       }}>{ i }</li>);    
    };
    return arr;
};







