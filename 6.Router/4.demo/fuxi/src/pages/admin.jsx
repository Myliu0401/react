import Layout from "../components/layout";
import { Route } from 'react-router-dom';
import Home from './home/index.jsx';
import LeadershipList from "./leadershipList/index.jsx";
import StudentList from "./studentList/index.jsx";
import TeacherList from "./teacherList/index.jsx";
import Header from "../components/header/index.jsx";
import Sideber from "../components/sidebar/index.jsx";





export default function Admin(props){
   return (<Layout header={<Header></Header>} sideber={<Sideber></Sideber>}>
        <Route component={Home} path="/" exact></Route>
        <Route component={StudentList} path="/studentList" exact={true}></Route>
        <Route component={LeadershipList} path="/leadershipList" exact={true}></Route>
        <Route component={TeacherList} path="/teacherList" exact={true}></Route>
   </Layout>)
}