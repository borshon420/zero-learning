import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';
import map from '../../4.jpg';

const Contact = () => {
    return (
        <>
        <div className="contact-header">
        <h1 className="contact-heading">Contact Us</h1>
        </div>
        <div className="contact-container">
            
            <div className="contact-img-content">
                
                <img src={map} alt="" />
            </div>
            <div className="contact-form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Your message here" as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
        </>
    );
};

export default Contact;