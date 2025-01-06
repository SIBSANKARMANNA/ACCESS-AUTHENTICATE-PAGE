import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="welcome-section">
                <h1>Welcome to My App</h1>
                <p>Your one-stop solution for managing your profile and more.</p>
                <div className="info-section">
                    <h2>Features of My App:</h2>
                    <ul>
                        <li>Secure and hassle-free user registration and login.</li>
                        <li>Personalized profile management with profile image and bio.</li>
                        <li>Real-time updates and seamless navigation.</li>
                        <li>Logout functionality to ensure your data privacy.</li>
                    </ul>
                </div>
                <div className="about-section">
                    <h2>Why Choose My App?</h2>
                    <p>
                        We are committed to providing a smooth and secure user experience. 
                        Whether you are managing your personal profile or updating your information, 
                        our app ensures a seamless and premium feel. Explore now to see how we make 
                        profile management intuitive and enjoyable!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
