import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services,setServices] = useServices();
    const handleDelete = id =>{
        const proceed = window.confirm("Are You Sure?");
        if(proceed){
            const url =`http://localhost:5000/manage/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                toast('sucessfully deleted');
                const remaining = services.filter(service=>service._id!==id);
                setServices(remaining)
            })
            
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button></h5>
                </div>)
            }
            <ToastContainer></ToastContainer>
           
        </div>
    );
};

export default ManageServices;