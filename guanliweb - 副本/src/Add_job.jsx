import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Add_job(){
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("post", data.post);
        formdata.append("enterprise", data.enterprise);
        formdata.append("salary", data.salary);
        formdata.append("position", data.position);
        formdata.append("work_time", data.work_time);
        formdata.append("work_form", data.work_form);
        formdata.append("contact_email", data.contact_email);

        axios.post('http://localhost:8081/add_job',formdata)
            .then(res =>{
                navigate('/job')
            })
            .catch(err=>console.log(err));
    }

    return(
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>添加职位</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputText" className="form-label">职位名称</label>
                    <input type="text" className="form-control" id="inputText" placeholder='Enter Text'
                           autoComplete='off'
                           onChange={e => setData({...data, post: e.target.value})}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputEnterprise" className="form-label">企业名称</label>
                    <input type="text" className="form-control" id="inputEnterprise" placeholder='Enter Enterprise'
                           autoComplete='off'
                           onChange={e => setData({...data, enterprise: e.target.value})}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputSalary" className="form-label">薪水</label>
                    <input type="text" className="form-control" id="inputSalary" placeholder='Enter Salary'
                           autoComplete='off'
                           onChange={e => setData({...data, salary: e.target.value})}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputPosition" className="form-label">工作地点</label>
                    <input type="text" className="form-control" id="inputPosition" placeholder='Enter Position'
                           autoComplete='off'
                           onChange={e => setData({...data, position: e.target.value})}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputWork_time" className="form-label">工作时间</label>
                    <input type="text" className="form-control" id="inputWork_time" placeholder='Enter Work_time'
                           autoComplete='off'
                           onChange={e => setData({...data, work_time: e.target.value})}/>
                </div>
                <div className="col-12">
                    <label className="form-label">线上/线下</label>
                    <select className="form-select"
                        onChange={e => setData({...data, work_form: e.target.value})}>
                        <option value="online">线上</option>
                        <option value="offline">线下</option>
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="inputContact_email" className="form-label">联系邮箱</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email'
                           autoComplete='off'
                           onChange={e => setData({...data, contact_email: e.target.value})}/>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">添加</button>
                </div>
            </form>
        </div>
    )
}

export default Add_job