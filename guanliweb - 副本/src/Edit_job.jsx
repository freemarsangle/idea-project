import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';

function Edit_student() {
    const [data, setData] = useState({
        post: '',
        enterprise: '',
        salary: '',
        position: '',
        work_time: '',
        work_form: '',
        contact_email: '',
    })
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {

        axios.get('http://localhost:8081/getJob/' + id)
            .then(res => {
                setData({...data,
                    post:res.data.Result[0].post,
                    enterprise: res.data.Result[0].enterprise,
                    salary: res.data.Result[0].salary,
                    position: res.data.Result[0].position,
                    work_time: res.data.Result[0].work_time,
                    work_form: res.data.Result[0].work_form,
                    contact_email: res.data.Result[0].contact_email,
                })
            })
            .catch(err => console.log(err));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update_job/'+id,data)
            .then(res =>{
                if (res.data.Status==="Success"){
                    navigate('/job')
                }
            })
            .catch(err=>console.log(err));
    }


    return (
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>更新职位信息</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputText" className="form-label">职位名称</label>
                    <input type="text" className="form-control" id="inputText" placeholder='Enter Text'
                           autoComplete='off'
                           onChange={e => setData({...data, post: e.target.value})} value={data.post}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputEnterprise" className="form-label">企业名称</label>
                    <input type="text" className="form-control" id="inputEnterprise" placeholder='Enter Enterprise'
                           autoComplete='off'
                           onChange={e => setData({...data, enterprise: e.target.value})} value={data.enterprise}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputSalary" className="form-label">薪水</label>
                    <input type="text" className="form-control" id="inputSalary" placeholder='Enter Salary'
                           autoComplete='off'
                           onChange={e => setData({...data, salary: e.target.value})} value={data.salary}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputPosition" className="form-label">工作地点</label>
                    <input type="text" className="form-control" id="inputPosition" placeholder='Enter Position'
                           autoComplete='off'
                           onChange={e => setData({...data, position: e.target.value})} value={data.position}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputWork_time" className="form-label">工作时间</label>
                    <input type="text" className="form-control" id="inputWork_time" placeholder='Enter Work_time'
                           autoComplete='off'
                           onChange={e => setData({...data, work_time: e.target.value})} value={data.work_time}/>
                </div>
                <div className="col-12">
                    <label className="form-label">线上/线下</label>
                    <select className="form-select"
                            onChange={e => setData({...data, work_form: e.target.value})} value={data.work_form}>
                        <option value="online">线上</option>
                        <option value="offline">线下</option>
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="inputContact_email" className="form-label">联系邮箱</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email'
                           autoComplete='off'
                           onChange={e => setData({...data, contact_email: e.target.value})} value={data.contact_email}/>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">更新</button>
                </div>
            </form>
        </div>
    )
}

export default Edit_student