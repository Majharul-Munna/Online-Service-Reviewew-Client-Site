import React, { useEffect, useState } from 'react';
import Service from '../../shared/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-10'>
            <h1 className=' text-purple-700 font-semibold text-3xl mb-4' >Services That We Have !!</h1>
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

export default Services;