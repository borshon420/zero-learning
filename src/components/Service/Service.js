import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {name, img, professor, price} = props.service;
    return (
        <div className="service-container">
            
            <Card style={{ width: '28rem', height: '100%' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Title>Price: ${price}</Card.Title>
    <Card.Title>Professor: {professor}</Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;