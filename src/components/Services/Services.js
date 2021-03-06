import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="our-services">
                <h1>Our Services</h1>
            </div>
            
            
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service.id} 
                    service={service}
                    ></Service>)
            }
            </div>
         </div>
    );
};

export default Services;