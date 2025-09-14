import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Inform(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getInform')
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
        axios.delete('http://localhost:8081/delete_inform/'+id)
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
                    <h3>通知列表</h3>
                </div>
                <Link to='/add_inform' className='btn btn-success'>新建通知</Link>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>通知</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((inform, index) => {
                            return <tr key={index}>
                                <td>{inform.text}</td>
                                <td>
                                    <button onClick={e => handleDelete(inform.id)} className='btn btn-sm btn-danger'>删除
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

export default Inform