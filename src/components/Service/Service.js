import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {name, img, professor, price, title} = props.service;
    return (
        <div className="service-container">
            
            <Card style={{ width: '28rem', height: '100%' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {title}
    </Card.Text>
    <Card.Title>Price: ${price}</Card.Title>
    <Card.Title>Professor: {professor}</Card.Title>
    
    
    
    
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;