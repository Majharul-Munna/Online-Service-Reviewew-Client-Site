import React, { useEffect, useState } from 'react';
import Service from '../../shared/Service/Service';

const AllServices = () => {
    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(() => {
        fetch('https://review-server-five.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-10'>
            <h1 className=' text-purple-700 font-semibold text-5xl mb-4' >All Services !!</h1>
            <div className=' grid gap-4 grid-flow-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service.service_id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;