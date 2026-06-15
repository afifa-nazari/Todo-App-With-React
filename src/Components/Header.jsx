// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved === 'true' || false;
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <h1> SmartTodo</h1>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/tasks">Tasks</Link>
                    <Link to="/completed">Completed</Link>
                    <button
                        className="dark-toggle"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? 'Light Mode' : ' Dark Mode'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;