import React from 'react';
import tiny from '../../../images/tiny.png';

const NotFound = () => {
    return (
        <div>
            <p className='text-primary text-center'>Mechanic is sleeping</p>
           <img className='w-100' src={tiny} alt="" /> 
        </div>
    );
};

export default NotFound;