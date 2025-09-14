import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Add_student() {
    const [data, setData] = useState({
        name: '',
        sex: '',
        number: '',
        email: '',
        school: '',
        profession: '',
        grade: '',
        score: '',
        password: '',
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("sex", data.sex);
        formdata.append("number", data.number);
        formdata.append("email", data.email);
        formdata.append("school", data.school);
        formdata.append("profession", data.profession);
        formdata.append("grade", data.grade);
        formdata.append("score", data.score);
        formdata.append("password", data.password);

        axios.post('http://localhost:8081/add_student', formdata)
            .then(res => {
                navigate('/themes')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>添加学生</h2>
            <form className="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputName" className="form-label">姓名</label>
                    <input type="text"
                           className="form-control"
                           id="inputName"
                           placeholder='Enter Name'
                           autoComplete='off'
                           onChange={e => setData({...data, name: e.target.value})}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputSex" className="form-label">性别</label>
                    <select
                        className="form-select"
                        id="inputSex"
                        value={data.sex || ''}
                        onChange={e => setData({...data, sex: e.target.value})}
                    >
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputStudent"
                           className="form-label">学号</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputStudentId"
                        placeholder='Enter student_id'
                        autoComplete='off'
                        onChange={e => setData({...data, number: e.target.value})}
                    />
                </div>

                <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label">邮箱号</label>
                    <input type="email"
                           className="form-control"
                           id="inputEmail"
                           placeholder='Enter Email'
                           autoComplete='off'
                           onChange={e => setData({...data, email: e.target.value})}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputSchool"
                           className="form-label">学校</label>
                    <input type="text" className="form-control" id="inputSchool" placeholder='Enter School'
                           autoComplete='off'
                           onChange={e => setData({...data, school: e.target.value})}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputProfession" className="form-label">专业</label>
                    <input type="text" className="form-control" id="inputProfession" placeholder='Enter Profession'
                           autoComplete='off'
                           onChange={e => setData({...data, profession: e.target.value})}/>
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputClass" className="form-label">年级</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputGrade"
                        placeholder='Enter grade'
                        autoComplete='off'
                        onChange={e => setData({...data, grade: e.target.value})}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputScore" className="form-label">分数</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputScore"
                        placeholder='enter score'
                        onChange={e => setData({...data, score:e.target.value})}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">密码</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder='Enter Password'
                           onChange={e => setData({...data, password: e.target.value})}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">创建</button>
                </div>
            </form>
        </div>
    )
}

export default Add_student