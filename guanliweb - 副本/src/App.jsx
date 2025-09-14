import React from "react";
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Login'
import Dashboard from "./Dashboard";
import Themes from "./Themes";
import Grade from "./Grade";
import Profile from "./Profile";
import Job_class from "./Job_class";
import Inform from "./Inform";
import Feedback from "./Feedback";
import Job from "./Job";
import Forum from "./Forum";
// import Add_admin from "./Add_admin";
import Edit_admin from "./Edit_admin";
import Add_inform from "./Add_inform"
import Add_class from "./Add_class";
import Add_student from "./Add_student";
import Edit_student from "./Edit_student";
import Add_job from "./Add_job";
import Edit_job from "./Edit_job";
import Create_account from "./Create_account";
import Add_forum from "./Add_forum";

function App() {
  return (
      <BrowserRouter>
          <Routes>
           <Route path='/' element={<Dashboard />}>

               <Route path='/themes' element={<Themes />}>
               </Route>
               <Route path='/add_student' element={<Add_student />}>
               </Route>
               <Route path='/themeEdit/:id' element={<Edit_student />}>
               </Route>
               <Route path='/grade' element={<Grade />}>
               </Route>
               <Route path='/job_class' element={<Job_class />}>
               </Route>
               <Route path='/add_class' element={<Add_class />}>
               </Route>
               <Route path='/job' element={<Job />}>
               </Route>
               <Route path='/add_job' element={<Add_job />}>
               </Route>
               <Route path='/jobEdit/:id' element={<Edit_job />}>
               </Route>
               <Route path='/forum' element={<Forum />}>
               </Route>
               <Route path='/add_forum' element={<Add_forum />}>
               </Route>
               <Route path='/feedback' element={<Feedback />}>
               </Route>
               <Route path='/inform' element={<Inform />}>
               </Route>
               <Route path='/add_inform' element={<Add_inform />}>
               </Route>
               <Route path='/profile' element={<Profile />}>
               </Route>
               {/*<Route path='/create' element={<Add_admin />}>*/}
               {/*</Route>*/}
               <Route path='/adminEdit/:id' element={<Edit_admin />}>
               </Route>
           </Route>
              <Route path='/create_account' element={<Create_account />}>
              </Route>
            <Route path='/login' element={<Login />}>
            </Route>
          </Routes>
      </BrowserRouter>

  )
}

export default App
