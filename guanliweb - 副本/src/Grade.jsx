import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Inform(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getGrade')
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

    return(
        <div>
            <div className='px-5 py-3'>
                <div className='d-flex justify-content-center mt-2'>
                    <h3>年级列表</h3>
                </div>
                <div className='mt-3'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>年级</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.grade}</td>
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