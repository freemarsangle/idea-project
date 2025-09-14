import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';

function Edit_student() {
    const [data, setData] = useState({
        name: '',
        sex:'',
        studentid:'',
        email: '',
        school: '',
        profession: '',
        grade:'',
        score:'',
    })
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(() => {

        axios.get('http://localhost:8081/getTheme/' + id)
            .then(res => {
                setData({...data,
                    name:res.data.Result[0].name,
                    sex:res.data.Result[0].sex,
                    studentid: res.data[0].studentid,
                    email: res.data.Result[0].email,
                    school: res.data.Result[0].school,
                    profession: res.data.Result[0].profession,
                    grade: res.data.Result[0].grade,
                    score: res.data.Result[0].score,
                })
            })
            .catch(err => console.log(err));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update_student/'+id,data)
            .then(res =>{
                if (res.data.Status==="Success"){
                    navigate('/themes')
                }
            })
            .catch(err=>console.log(err));
    }

    return (
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>更新学生名单</h2>
            <form class="row g-3 w-50" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputName" className="form-label">姓名</label>
                    <input type="text"
                           className="form-control"
                           id="inputName"
                           placeholder='Enter Name'
                           autoComplete='off'
                           onChange={e => setData({...data, name: e.target.value})}
                           value={data.name}/>
                </div>
                <div className="col-md-6">
                    <label  htmlFor="inputSex" className="form-label">性别</label>
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
                    <label htmlFor="inputStudentId" className="form-label">学号</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputStudentId"
                        placeholder='enter student_id'
                        autoComplete='off'
                        value={data.number}
                        onChange={e => setData({...data, number: e.target.value})}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">邮箱号</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder='Enter Email'
                           autoComplete='off'
                           onChange={e => setData({...data, email: e.target.value})}
                           value={data.email}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputSchool" className="form-label">学校</label>
                    <input type="school" className="form-control" id="inputSchool" placeholder='Enter School'
                           autoComplete='off'
                           onChange={e => setData({...data, school: e.target.value})}
                           value={data.school}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputProfession" className="form-label">专业</label>
                    <input type="profession" className="form-control" id="inputProfession" placeholder='Enter Profession'
                           autoComplete='off'
                           onChange={e => setData({...data, profession: e.target.value})}
                           value={data.profession}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputClass" className="form-label">年级</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputClass"
                        placeholder='enter grade'
                        autoComplete='off'
                        value={data.grade}
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
                        value={data.score}
                        onChange={e => setData({...data, score: e.target.value})}
                    />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">更新</button>
                </div>
            </form>
        </div>
    )
}

export default Edit_student