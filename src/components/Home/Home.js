import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="home-content">
            <h1>You only have to know one thing<br />
             <span className="text-color">You can learn anything</span><br />
            <span className="text-color-2">Education For Everyone</span></h1>
            <div className="services-container">
            {
                services.slice(1, 5).map(service => <Service
                    key={service.id} 
                    service={service}
                    ></Service>)
            }
            </div>
        </div>
    );
};

export default Home;