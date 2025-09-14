import React, {useEffect} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios'


function Dashboard(){
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081/dashboard')
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login')
                }
            })
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                navigate('/login')
            }).catch(err => console.log(err));
    }
    return(
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div
                        className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/"
                           className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-bugle text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">学生成绩管理</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu">
                            <li className="nav-item">
                                <Link to='/themes' className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-people-fill">
                                    </i> <span className="ms-1 d-none d-sm-inline" >学生信息</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Grade'  data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-collection">
                                    </i> <span className="ms-1 d-none d-sm-inline">学生班级统计</span> </Link>
                            </li>
                            <li>
                                <Link to='/job_class'  data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-bookmark-fill">
                                    </i> <span className="ms-1 d-none d-sm-inline">专业类别统计</span> </Link>
                            </li>
                            <li>
                                <Link to='/job' data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-briefcase-fill">
                                    </i> <span className="ms-1 d-none d-sm-inline">职位信息</span></Link>
                            </li>
                            <li>
                                <Link to='/forum' data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4 bi-chat-square-fill">
                                    </i> <span
                                    className="ms-1 d-none d-sm-inline">论坛管理</span></Link>
                            </li>
                            <li>
                                <Link to='/feedback' data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-chat-left-dots-fill">
                                    </i> <span
                                    className="ms-1 d-none d-sm-inline">反馈</span> </Link>
                            </li>
                            <li>
                                <Link to='/inform' className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-bell-fill">
                                    </i> <span
                                    className="ms-1 d-none d-sm-inline">通知</span> </Link>
                            </li>
                            <li>
                                <Link to='/profile' className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-person-lines-fill">
                                    </i> <span
                                    className="ms-1 d-none d-sm-inline">管理员</span> </Link>
                            </li>
                            <li onClick={handleLogout}>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-power">
                                    </i> <span
                                    className="ms-1 d-none d-sm-inline">退出登陆</span></a>
                            </li>
                        </ul>


                    </div>
                </div>
                <div className="col p-0 m-0">
                    <div className='p-2 d-flex justify-content-center shadow'>
                       <h4>
                           学生成绩管理端
                       </h4>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
)
}

export default Dashboard















