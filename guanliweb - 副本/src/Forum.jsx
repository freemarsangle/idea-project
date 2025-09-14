import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Forum(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getForum')
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
        axios.delete('http://localhost:8081/delete_forum/'+id)
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
                    <h3>论坛帖子列表</h3>
                </div>
                <Link to='/add_forum' className='btn btn-success'>添加新的帖子</Link>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>帖子展示列表</th>
                            <th>帖子对应的回复</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((chatdata, index) => {
                            return <tr key={index}>
                                <td>{chatdata.viewpoint}</td>
                                <td>{chatdata.recover}</td>
                                <td>
                                    <button onClick={e => handleDelete(chatdata.id)} className='btn btn-sm btn-danger'>删除
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



export default Forum