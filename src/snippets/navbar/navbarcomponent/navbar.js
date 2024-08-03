import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle the search submit logic here
        console.log("Search query:", searchQuery);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>MyApp</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <form className="navbar-search" onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default NavBar;
