import React,{Suspense}  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Alert, Spin } from 'antd';
// import ChangePass from '../pages/ChangePass';
// import ForgetPass from '../pages/ForgetPass';
// import LogIn from '../pages/LogIn';
// import SignUp from '../pages/SignUp';
const SignUp = React.lazy(()=> import("../pages/SignUp"));
const LogIn = React.lazy(()=>import("../pages/LogIn"));
const ForgetPass  = React.lazy(()=>import("../pages/ForgetPass"));
const ChangePass = React.lazy(()=>import("../pages/ChangePass"))

const Routing = () => {
  return (
    <Suspense fallback={ <div> <Spin tip="Loading..." size='large'> <Alert
    message="Wait for a while!"
    type='info'
    /> </Spin> Loading.. </div> }>
<BrowserRouter>
    <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path="/forgetpass" element={<ForgetPass/>}/>
        <Route path='/changepass' element={<ChangePass/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </Suspense>
  )
};

export default Routing;
