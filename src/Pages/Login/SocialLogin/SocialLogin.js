import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css';
const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);    
    const navigate = useNavigate();
    let location = useLocation();
  let from = location.state?.from?.pathname || "/";
    let errorElement;
    
    if(userGoogle||userGithub){
        navigate(from, { replace: true });
    }
    if(loadingGoogle || loadingGithub){
        return <Loading></Loading>
    }
    if(errorGoogle || errorGithub){
        errorElement =<p className='text-danger'>Error: {errorGoogle?.message} {errorGithub?.message}</p>;
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
            </div>
            {
                errorElement
            }
            <div>
                <button 
                    onClick={()=>signInWithGoogle()}
                    className='social btn btn-info d-block mx-auto my-2'>
                    <img style={{ height: '30px', width: '30px' }} src={google} alt="" />
                    <span className='m-2'>Google Sign In</span>
                </button>
                <button 
                    className='social btn btn-info d-block mx-auto my-2'>
                    <img style={{ height: '30px', width: '30px' }} src={facebook} alt="" />
                    <span className='m-2'>Facebook Sign In</span>
                </button>
                <button 
                    onClick={()=>signInWithGithub()}
                    className='social btn btn-info d-block mx-auto'>
                    <img style={{ height: '30px', width: '30px' }} src={github} alt="" />
                    <span className='m-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;