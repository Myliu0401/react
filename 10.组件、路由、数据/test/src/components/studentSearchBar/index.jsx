

import { useState } from 'react';


export default function StudentSearchBar(props){

    const [ifon, setIfon] = useState({
      keyword: props.keyword,
      sex: props.sex
    });


    return (<div style={{display: 'flex'}}>
      <input value={ifon.keyword} onChange={(event)=>{
        setIfon({...ifon, keyword:event.target.value})
      }} />
      <div>
        性别:
        &nbsp;&nbsp;&nbsp;
        <label>不限: 
        <input type={'radio'} name="sex" checked={ifon.sex === -1} value={-1} onChange={
          (event)=>{setIfon({...ifon,sex:event.target.value - 0})}
          }/></label>
        &nbsp;&nbsp;&nbsp;
        <label>
          女:
        <input type={'radio'} name="sex" checked={ifon.sex === 0} value={0} onChange={
         (event)=>{setIfon({...ifon,sex:event.target.value - 0})}
        }/>
        </label>
        &nbsp;&nbsp;&nbsp;
        <label>
          男: 
        <input type={'radio'} name="sex" checked={ifon.sex === 1} value={1} onChange={
          (event)=>{setIfon({...ifon,sex: event.target.value - 0})}
        }/>
        </label>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>{
          props.onChange && props.onChange({sex:ifon.sex, key:ifon.keyword})
        }}>查询</button>
      </div>
    </div>);
};