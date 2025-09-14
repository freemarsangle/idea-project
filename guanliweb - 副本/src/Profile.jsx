import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Profile() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getAdmin')
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
        axios.delete('http://localhost:8081/delete/'+id)
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
                    <h3>管理员列表</h3>
                </div>
                <Link to='/create' className='btn btn-success'>添加管理员</Link>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>名字</th>
                            <th>邮箱</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((admin, index) => {
                            return <tr key={index}>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>
                                    <Link to={`/adminEdit/` + admin.id}
                                          className='btn btn-primary btn-sm me-2'>编辑</Link>
                                    <button onClick={e => handleDelete(admin.id)} className='btn btn-sm btn-danger'>删除
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






