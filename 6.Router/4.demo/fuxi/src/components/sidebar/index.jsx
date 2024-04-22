
import './index.css'

export default function Sideber(props){
    return (<div className="sidebar">
          <ul className='sidebar_ul'>
            <li className='ul_item'><a href="/">首页</a></li>
            <li className='ul_item'><a href="/studentList">学生列表</a></li>
            <li className='ul_item'><a href="/leadershipList">老师列表</a></li>
            <li className='ul_item'><a href="/teacherList">领导列表</a></li>
          </ul>
    </div>)
}