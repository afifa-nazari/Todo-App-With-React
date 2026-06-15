// src/pages/NotFound.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    useEffect(() => {
        document.title = '404 - Page Not Found';
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: 'var(--btn-primary)' }}>404</h1>
            <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
                <button className="btn btn-primary">Go Back Home</button>
            </Link>
        </div>
    );
}

export default NotFound;
