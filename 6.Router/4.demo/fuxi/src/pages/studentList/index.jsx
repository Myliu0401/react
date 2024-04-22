

import { useEffect,useState } from "react"
import { getStudentList } from "../../api/index.js";

export default function StudentList(props){
    console.log(props)
     const [ifon,setIfon] = useState({
       datas:null,
       total:null,
       daIfon:{
          page:1,
          size:10,
          name:null
       }
     });

     useEffect(()=>{
         
      getStudentList(ifon.daIfon).then((data)=>{
        setIfon({
          ...ifon,
          datas:data.datas,
          total:data.total
        })
      })
     
     },[ifon.daIfon.page,ifon.daIfon.size,ifon.daIfon.name])

     return (<div className="studentList">
       <h3>studentList</h3>
       <ul>
         { ifon.datas && ifon.datas.map((item,index)=>{
           return (<li key={index}>{ item.name }</li>)
         }) }
       </ul>
     </div>)
}