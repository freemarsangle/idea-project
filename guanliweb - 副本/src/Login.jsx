import React, {useState} from 'react'
import './style.css'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";


function Login() {
    const errorStyle = {
        color: 'red'
    }
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data.Status === 'Success') {
                    navigate('/themes');
                } else {
                    setError('邮箱或密码错误');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{color: 'white'}} className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-30 border loginForm'>
                {error && <div style={errorStyle}>{error}</div>}
                <h2 style={{marginBottom: '20px'}}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{textAlign: 'left'}} className='mb-3'>
                        <label htmlFor="email">
                            <strong>邮箱</strong></label>
                        <input type="email" placeholder='enter Email' name='email'
                               onChange={e => setValues({...values, email: e.target.value})}
                               className='form-control rounded-20' autoComplete='off'/>

                    </div>
                    <div style={{textAlign: 'left'}} className='mb-3'>
                        <label htmlFor="password"><strong>密码</strong></label>
                        <input type="password" placeholder='enter password' name='password'
                               onChange={e => setValues({...values, password: e.target.value})}
                               className='form-control rounded-20 '/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-20 text-white' style={{marginBottom: '20px'}}> 登陆</button>
                    <p style={{textAlign: 'left'}}>你同意了我们的条款和隐私政策</p>
                    <Link to='/create_account' type='submit' style={{color: 'black'}}
                            className='btn btn-success w-100 bg-light rounded-20'>
                        创建账户
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login