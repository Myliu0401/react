import StudentTable from './studentTable/index.jsx';
import StudentSearchBar from './studentSearchBar/index.jsx';
import Paging from './paging/index.jsx';
import { createFetchStudentsAction, createSetStudentAction, createSetConditionAction, createSetIsLoadingAction } from '../store/actions/student.js';
import reactRedux from '../react-redux/index.js';
import { useEffect } from 'react';
import { store }  from '../store/index.js';
//import { connect } from 'react-redux'

const connect = reactRedux.connect;


export default function StudentSearch(){

  useEffect(()=>{
   store.dispatch(createFetchStudentsAction(store.getState().student.condition))
  }, []);

  return <div>
    <MyStudentSearchBar></MyStudentSearchBar>
    <MyStudentTable></MyStudentTable>
    <MyPaging></MyPaging>
  </div>

};



function searchBar(dispatch, props){
  return {
   async onChange(newCondition){
        newCondition.page = 1
        dispatch(createSetConditionAction(newCondition))
        dispatch(createSetIsLoadingAction(true))
        await dispatch(createFetchStudentsAction(store.getState().student.condition))
        dispatch(createSetIsLoadingAction(false))
    }
  }
};

function searchBar1(store){
    return {
      keyword: store.student.condition.key,
      sex: store.student.condition.sex
    }
};

function table(dispatch, props){
   return {
     
   }
};

function table1(store){
     return {
      stus: store.student.result.datas || []
     }
};


function paging(dispatch, props){
      return {
       async onChange(page){
           dispatch(createSetConditionAction({page}))
           dispatch(createSetIsLoadingAction(true))
           await dispatch(createFetchStudentsAction(store.getState().student.condition))
           dispatch(createSetIsLoadingAction(false))
        }
      }
};

function paging1(store){
   return {
    current: store.student.condition.page,
    pageSize: store.student.condition.limit,
    total: store.student.result.total,
    panelNumber: 10
   }
};

const MyStudentSearchBar = connect(searchBar1,searchBar)(StudentSearchBar);
const MyStudentTable = connect(table1, table)(StudentTable);
const MyPaging = connect(paging1, paging)(Paging);