
import './index.css';

export default function StudentTable(props){
  
    return (<table  className="studentTable">
      <thead className="studentTable_thead">
        <tr className="thead_tr">
          <th className="tr_th">学号</th>
          <th className="tr_th">姓名</th>
          <th className="tr_th">性别</th>
          <th className="tr_th">出生年份</th>
          <th className="tr_th">邮箱</th>
          <th className="tr_th">操作</th>
        </tr>
      </thead>
      <tbody className="studentTable_table">
        { createTd(props) }
      </tbody>
    </table>)
};


function createTd(props){
     return props.stus.map((item)=>{
        return <tr className="table_tr" key={item.id}>
          <td className="tr_td">{ item.sNo }</td>
          <td className="tr_td">{ item.name }</td>
          <td className="tr_td">{ item.sex === 1 ? '女' : '男' }</td>
          <td className="tr_td">{ item.birth }</td>
          <td className="tr_td">{ item.email }</td>
          <td className="tr_td">
             <span>暂无</span>
          </td>
        </tr>
     });
};