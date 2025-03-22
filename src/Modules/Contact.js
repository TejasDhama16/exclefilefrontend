// src/Pages/Contact.js  
import React from 'react';  
import './Contact.css'; // Import the CSS file

const Contact = () => {  
    return (  
        <div className="contact-container">  
            <h1>Contact Us</h1>  
            <p>  
                For inquiries, please contact us at:  
                <br />  
                Email: <a href="mailto:support@example.com">support@example.com</a>  
                <br />  
                Phone: <a href="tel:+1234567890">+1 234 567 890</a>  
            </p>  
        </div>  
    );  
};  

export default Contact;  