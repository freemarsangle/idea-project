import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Job_class(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getClass')
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
        axios.delete('http://localhost:8081/delete_class/'+id)
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
                    <h3>专业统计列表</h3>
                </div>
                <Link to='/add_class' className='btn btn-success'>添加专业类别</Link>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>专业统计</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((job_class, index) => {
                            return <tr key={index}>
                                <td>{job_class.job_class}</td>
                                <td>
                                    <button onClick={e => handleDelete(job_class.id)} className='btn btn-sm btn-danger'>删除
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

export default Job_class