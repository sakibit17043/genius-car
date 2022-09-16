import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(auth);
  let location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    if(loading || sending){
      return <Loading></Loading>
    }
 
   
    const handleSubmit = event =>{
        event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email,password)
    }
    const navigateRegister = event =>{
        navigate('/register');
    }
    const navigateForgetPassword =async () =>{
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
      toast('Sent email');
      }
      else{
        toast('Please Enter Your Email');
      }
      


    }
    if(user){
        navigate(from, { replace: true });
    }
    if(error){
      errorElement =<p className='text-danger'>Error: {error.message}</p>;
    }

    return (
        <div className='container login mx-auto'>
            <h2 className='text-primary text-center'>Please login</h2>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      <Button className='login-btn  d-block mx-auto mb-2' variant="primary" type="submit">
        Login
      </Button>
    </Form>
    {
      errorElement
    }
    <p>New to Car Doctor? <Link to={'/register'} className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
    <p>Forget Password?<button className='text-primary text-decoration-none btn btn-link' onClick={navigateForgetPassword}>Reset Password</button></p>
    <SocialLogin></SocialLogin>
    <ToastContainer />
    </div>
    );
};

export default Login;