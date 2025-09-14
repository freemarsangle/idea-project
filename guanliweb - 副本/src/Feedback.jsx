import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Feedback(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getFeedback')
            .then(res => {
                if (res.data.Status === "Success"){
                    console.log(res.data.Result)
                    setData(res.data.Result);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, [])
    return(
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>反馈列表</h3>
            </div>
            <div className='mt-3'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>反馈</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((feedback, index) => {
                        return <tr key={index}>
                            <td>{feedback.back_text}</td>
                        </tr>
                    })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Feedback