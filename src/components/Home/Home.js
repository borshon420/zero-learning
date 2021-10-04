import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const history = useHistory()

    const handleHomeBtn = () => {
        history.push('/about')
    }

    const handleHomeBtn2 = () => {
        history.push('/services')
    }
    return (
        <div className="home-content">
            <div className="home-image-container">
                <h1>You only have to know one thing<br />
                <span className="text-color">You can learn anything</span><br />
                <span className="text-color-2">Education For Everyone</span></h1>
            <div className="home-btn">
                <Button style={{marginRight: '30px'}} onClick={handleHomeBtn2} variant="primary">Our Services</Button>
                <Button onClick={handleHomeBtn} >About Us</Button>
            </div>
            </div>
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