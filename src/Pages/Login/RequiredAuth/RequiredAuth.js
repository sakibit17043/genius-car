import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {
    let [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId==='password' && !user.emailVerified) {
        return (
            <div className='text-center mt-5'>
                <h3 className='text-danger'>Your email is not verified</h3>
                <h4 className='text-success'>Please verify your email</h4>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                   Sent Verification Email Again 
                </button>
                <ToastContainer/>
            </div>
        );
    }
    return children;
};

export default RequiredAuth;