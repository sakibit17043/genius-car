import React from 'react';

const Expert = ({expert}) => {
    const {name,img} = expert;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
             <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus mollitia voluptates quam! Perspiciatis cum temporibus cumque qui rerum omnis at.</p>
          <a href="#" className="btn btn-primary">Book Now</a>
        </div>
      </div>
        </div>
       
    );
};

export default Expert;