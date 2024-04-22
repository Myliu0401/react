import React from 'react';
import './index.css';

export default class Header extends React.Component{
          constructor(props){
                super(props);
          };


          render(){
              return (<div className='tou'>
                  <span>管理系统后台</span>
                  <span>退出登录</span>
              </div>); 
          };
};