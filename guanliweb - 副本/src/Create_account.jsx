import React, {useState} from 'react'
import './style.css'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";

function Create_account() {
    const errorStyle = {
        color: 'red'
    }

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);

        if(!data.name || !data.email || !data.password) {
            setError('请填写完整信息');
            return;
        }
        axios.post('http://localhost:8081/create_account',formdata)
            .then(res =>{
                navigate('/login')
            })
            .catch(err=>console.log(err));
    }

    return (
        <div style={{color: 'white'}} className='d-flex justify-content-center align-items-center vh-100 signupPage'>
            <div className='p-3 rounded w-30 border signupForm'>
                {error && <div style={errorStyle}>{error}</div>}
                <h2 style={{marginBottom: '20px'}}>create account</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{textAlign: 'left'}} className='mb-3'>
                        <label htmlFor="text"><strong>名字</strong></label>
                        <input type="text" placeholder='enter name' name='text'
                               autoComplete='off'
                               onChange={e => setData({...data, name: e.target.value})}
                               className='form-control rounded-20 '/>
                    </div>
                    <div style={{textAlign: 'left'}} className='mb-3'>
                        <label htmlFor="email">
                            <strong>邮箱</strong></label>
                        <input type="email" placeholder='enter Email' name='email'
                               onChange={e => setData({...data, email: e.target.value})}
                               className='form-control rounded-20' autoComplete='off'/>
                    </div>
                    <div style={{textAlign: 'left'}} className='mb-3'>
                        <label htmlFor="password"><strong>密码</strong></label>
                        <input type="password" placeholder='enter password' name='password'
                               onChange={e => setData({...data, password: e.target.value})}
                               className='form-control rounded-20 '/>
                    </div>
                    <p style={{textAlign: 'left'}}>你同意了我们的条款和隐私政策</p>
                    <button type='submit' style={{color: 'black'}}
                          className='btn btn-success w-100 rounded-20'>
                        创建账户
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Create_account