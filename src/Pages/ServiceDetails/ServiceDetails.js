import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
        <h2>Welcome to service detail:{serviceId}</h2>
        <div className='text-center'>
        <Link to={'/checkout'} >
            <div className="btn btn-primary">Proceed Checkout</div>
        </Link>
        </div>
        
        </div>
    );
};

export default ServiceDetails;