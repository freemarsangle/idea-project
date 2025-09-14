import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Add_class(){
    const [data, setData] = useState({
        viewpoint: '',
        recover:'',
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("viewpoint", data.viewpoint);
        axios.post('http://localhost:8081/add_forum',formdata)
            .then(res =>{
                navigate('/forum')
            })
            .catch(err=>console.log(err));
    }

    return(
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>添加新的帖子</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputText" className="form-label">帖子</label>
                    <input type="text" className="form-control" id="inputText" placeholder='Enter Text'
                           autoComplete='off'
                           onChange={e => setData({...data, viewpoint: e.target.value})}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">添加</button>
                </div>
            </form>
        </div>
    )
}

export default Add_class