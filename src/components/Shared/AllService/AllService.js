import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllService = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch(' https://food-service-server-ten.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data.data));
    }, [])

    return (
        <div className='grid md:grid-cols-3 gap-2 mt-4  ms-3'>

            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }

        </div>
    );
};

export default AllService;