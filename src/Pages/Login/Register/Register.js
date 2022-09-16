import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);      
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";


    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }
   
      if(user){
        console.log(user)
      }
      if(loading || updating){
        return <Loading></Loading>
      }
  
    const handleRegister =async (event) =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
       await createUserWithEmailAndPassword(email,password);
      await updateProfile({ displayName:name });
          alert('Updated profile');
       navigate(from, { replace: true });



    }
    return (
        <div className='container register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={`ps-2 ${agree?'':'text-danger'}`} htmlFor="terms">Accept terms and condition</label>
                {/* <input
                disabled={!agree}
                className='form-btn d-block mx-auto btn btn-primary mt-2' 
                type="submit" 
                value="Register" /> */}
                <button
                disabled={!agree}
                className='form-btn d-block btn btn-primary mt-2' 
                 type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to={'/Login'} className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;