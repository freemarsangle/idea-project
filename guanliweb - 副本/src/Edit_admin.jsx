import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';

function Edit_admin() {
    const [data, setData] = useState({
        name: '',
        email: '',
    })
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {

        axios.get('http://localhost:8081/get/' + id)
            .then(res => {
                setData({...data,
                    name:res.data.Result[0].name,
                    phone: res.data.Result[0].email,})
            })
            .catch(err => console.log(err));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update_admin/'+id,data)
            .then(res =>{
                if (res.data.Status==="Success"){
                    navigate('/profile')
                }
            })
            .catch(err=>console.log(err));
    }


    return (
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>更新管理员名单</h2>
            <form class="row g-3 w-50" onSubmit={handleSubmit}>
                <div class="col-12">
                    <label htmlFor="inputName" class="form-label">名字</label>
                    <input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                           onChange={e => setData({...data, name: e.target.value})} value={data.name}/>
                </div>
                <div class="col-12">
                    <label htmlFor="inputEmail4" class="form-label">邮箱</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email'
                           autoComplete='off'
                           onChange={e => setData({...data, email: e.target.value})} value={data.email}/>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">更新</button>
                </div>
            </form>
        </div>
    )
}

export default Edit_admin