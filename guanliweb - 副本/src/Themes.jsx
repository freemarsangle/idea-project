import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Themes(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getStudent')
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log(res.data.Result)
                    setData(res.data.Result);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete_student/'+id)
            .then(res => {
                if (res.data.Status === "Success") {
                    window.location.reload(true);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }
    return(
        <div>
            <div className='px-5 py-3'>
                <div className='d-flex justify-content-center mt-2'>
                    <h3>学生列表</h3>
                </div>
                <Link to='/add_student' className='btn btn-success'>添加学生</Link>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>学号</th>
                            <th>邮箱号</th>
                            <th>学校</th>
                            <th>专业</th>
                            <th>年级</th>
                            <th>分数</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((themes, index) => {
                            return <tr key={index}>
                                <td>{themes.name}</td>
                                <td>{themes.sex}</td>
                                <td>{themes.number}</td>
                                <td>{themes.email}</td>
                                <td>{themes.school}</td>
                                <td>{themes.profession}</td>
                                <td>{themes.grade}</td>
                                <td>{themes.score}</td>
                                <td>
                                    <Link to={`/themeEdit/` + themes.id}
                                          className='btn btn-primary btn-sm me-2'>编辑</Link>
                                    <button onClick={e => handleDelete(themes.id)} className='btn btn-sm btn-danger'>删除
                                    </button>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Themes