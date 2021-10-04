import React from 'react';
import './About.css';
import logo from '../../2.jpg';
import logo2 from '../../5.jpg';


const About = () => {
    return (
        <>
        <div className="about-head-container">
            <h1 className="about-text">About Us</h1>
        </div>
        <div className="about-container">
            <div className="about-us-container">
                <h1>About Us</h1>
                <p>Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn’t ended. You fight like a younger man, there’s nothing held back. It’s admirable, but mistaken. When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn’t considered an honor, it was a public service.

                Meet the Ipsums is a handy resource to have around whenever you need some filler text. Here are other useful resources in our archives to check out</p>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="about-container-2">
            <div>
                <img src={logo2} alt="" />
            </div>
            <div className="about-us-container-2">
                <h1>About Our Community</h1>
                <p>Community psychologists such as McMillan and Chavis (1986) state that four key factors defined a sense of community: "(1) membership, (2) influence, (3) fulfilment of individuals needs and (4) shared events and emotional connections. So, the participants of learning community must feel some sense of loyalty and belonging to the group (membership) that drive their desire to keep working and helping others, also the things that the participants do must affect what happens in the community; that means, an active and not just a reactive performance (influence). Besides,</p>
            </div>
            
        </div>
        </>
    );
};

export default About;