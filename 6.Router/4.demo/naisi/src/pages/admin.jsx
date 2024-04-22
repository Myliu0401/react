import React from 'react';
import Layout from '../components/Layout/index.js';
import Header from '../components/header/index.jsx';
import Menu from '../components/menu/index.jsx';
import StudentList from './student/studentList/index.jsx';
import Welcome from './welcome/index.jsx';
import StudentAdd from './student/studentAdd/index.jsx';
import CoursesAdd from './courses/coursesAdd/index.jsx';
import CoursesList from './courses/coursesLsit/index.jsx';
import { Route } from 'react-router-dom';


export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Layout headers={<Header />} aside={<Menu />}>
            <Route path='/' component={Welcome} exact></Route>
            <Route path='/students' exact component={StudentList}></Route>
            <Route path='/students/add' exact component={StudentAdd}></Route>
            <Route path='/courses' exact component={CoursesList}></Route>
            <Route path='/courses/add' exact component={CoursesAdd}></Route>
        </Layout>);
    };
};