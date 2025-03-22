// src/Pages/Home.js  
import React from 'react';  
import './Home.css'; // Import the CSS file for styles  
 

const Home = () => {  
    return (  
        <div className="home-container">  
            <header className="home-header">  
                <h1>Welcome to the Customer Management System</h1>  
                <p>Your one-stop solution for managing customer data efficiently!</p>  
            </header>  

            <main className="features">  
                <section className="feature">  
                
                    <h2>Excellent Customer Service</h2>  
                    <p>Our system is designed to help you provide exceptional customer service with ease.</p>  
                </section>  
                <section className="feature">  
          
                    <h2>Efficient Data Management</h2>  
                    <p>Manage your customer data seamlessly with our intuitive interface.</p>  
                </section>  
                 {/* About Us Section */}  
            
            </main>  
            <section className="about-us">  
                <h2>About Us</h2>  
                <p>  
                    We are dedicated to providing businesses with powerful tools to manage customer information efficiently.  
                    Our team consists of industry experts who understand the challenges businesses face.  
                    We strive to make customer management simple and effective for everyone.  
                </p>  
            </section>  

            {/* Contact Section */}  
            <section className="contact">  
                <h2>Contact Us</h2>  
                <p>If you have any questions or need support, feel free to reach out:</p>  
                <p>Email: support@example.com</p>  
                <p>Phone: +1 234 567 890</p>  
                <p>Or connect with us on our social media channels!</p>  
            </section> 
        
        </div>  
    );  
};  

export default Home;