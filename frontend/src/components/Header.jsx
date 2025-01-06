import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">My App</h1>
                <nav>
                    <ul>
                        {localStorage.getItem('token') ? (
                            <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                            
                            </>
                         ) : (
                            <>  <li><Link to="/">Home</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
