import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Profile() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getJob')
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
        axios.delete('http://localhost:8081/delete_job/'+id)
            .then(res => {
                if (res.data.Status === "Success") {
                    window.location.reload(true);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className='px-5 py-3'>
                <div className='d-flex justify-content-center mt-2'>
                    <h3>职位信息列表</h3>
                </div>
                <Link to='/add_job' className='btn btn-success'>添加职位信息</Link>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>职位名称</th>
                            <th>企业名称</th>
                            <th>薪水</th>
                            <th>工作地点</th>
                            <th>工作时间</th>
                            <th>工作形式</th>
                            <th>联系邮箱</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((job, index) => {
                            return <tr key={index}>
                                <td>{job.post}</td>
                                <td>{job.enterprise}</td>
                                <td>{job.salary}</td>
                                <td>{job.position}</td>
                                <td>{job.work_time}</td>
                                <td>{job.work_form}</td>
                                <td>{job.contact_email}</td>
                                <td>
                                    <Link to={`/jobEdit/` + job.id}
                                          className='btn btn-primary btn-sm me-2'>编辑</Link>
                                    <button onClick={e => handleDelete(job.id)} className='btn btn-sm btn-danger'>删除
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

export default Profile
