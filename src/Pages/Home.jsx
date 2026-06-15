// src/pages/Home.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        document.title = 'Home | SmartTodo App';
    }, []);

    return (
        <div>
            <div className="page-header">
                <h1>Welcome to SmartTodo</h1>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    A smart way to manage your daily tasks with priorities, filters, and persistent storage.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/tasks">
                        <button className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
                            Go to Tasks
                        </button>
                    </Link>
                    <Link to="/completed">
                        <button className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
                            View Completed
                        </button>
                    </Link>
                </div>
            </div>
            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3> Add Tasks</h3>
                    <p>Create tasks with title, description, and priority levels.</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3>Set Priorities</h3>
                    <p>Low, Medium, or High priority with visual highlighting.</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3> Persistent Storage</h3>
                    <p>Your tasks are saved locally and survive page refresh.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;