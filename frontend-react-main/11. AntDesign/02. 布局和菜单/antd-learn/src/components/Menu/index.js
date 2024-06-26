import React from 'react'
import styles from "./index.css"
import { Row, Col, Button } from "antd"

export default function index(props) {
    return (
        <Row className={styles.header} type="flex" justify="space-between">
            <Col>
                <h1>欢迎使用学生管理系统</h1>
            </Col>
            <Col>
                <span>欢迎你</span>
                <span>{props.loginId}</span>
                <Button type="primary" shape="circle" onClick={props.onLoginOut} icon="logout"></Button>
            </Col>
        </Row>
    );
    // return (
    //     <div className={styles.menu}>
    //         <h1 className={styles.title}>欢迎使用学生管理系统</h1>
    //         <div className={styles.loginInfo}>
    //             <span>欢迎你</span>
    //             <span>{props.loginId}</span>
    //             <button onClick={props.onLoginOut}>退出登录</button>
    //         </div>
    //     </div>
    // )
}
