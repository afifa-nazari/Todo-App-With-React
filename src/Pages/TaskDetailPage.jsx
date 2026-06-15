// src/pages/TaskDetailPage.jsx
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function TaskDetailPage({ tasks, deleteTask, toggleComplete }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = tasks.find(t => t.id === parseInt(id));

    useEffect(() => {
        document.title = task ? `${task.title} | SmartTodo` : 'Task Not Found';
    }, [task]);

    if (!task) {
        return (
            <div className="page-header">
                <h1>Task Not Found</h1>
                <p>The task you're looking for doesn't exist or has been deleted.</p>
                <Link to="/tasks">
                    <button className="btn btn-primary" style={{ marginTop: '1rem' }}>← Back to Tasks</button>
                </Link>
            </div>
        );
    }

    const formatFullDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'Low': return 'priority-low';
            case 'Medium': return 'priority-medium';
            case 'High': return 'priority-high';
            default: return '';
        }
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            deleteTask(task.id);
            navigate('/tasks');
        }
    };

    return (
        <div>
            <div className="page-header">
                <Link to="/tasks" style={{ textDecoration: 'none', color: 'var(--btn-primary)' }}>
                    ← Back to Tasks
                </Link>
                <h1 style={{ marginTop: '0.5rem' }}>Task Details</h1>
            </div>

            <div className="detail-card card">
                <div className="detail-field">
                    <div className="detail-label">Title</div>
                    <div className="detail-value" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                        {task.title}
                    </div>
                </div>

                <div className="detail-field">
                    <div className="detail-label">Description</div>
                    <div className="detail-value">
                        {task.description || 'No description provided.'}
                    </div>
                </div>

                <div className="detail-field">
                    <div className="detail-label">Priority</div>
                    <div className="detail-value">
                        <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                            {task.priority}
                        </span>
                    </div>
                </div>

                <div className="detail-field">
                    <div className="detail-label">Status</div>
                    <div className="detail-value">
                        <span className={`task-status ${task.completed ? 'status-done' : 'status-pending'}`}>
                            {task.completed ? '✓ Completed' : 'Pending'}
                        </span>
                    </div>
                </div>

                <div className="detail-field">
                    <div className="detail-label">Created Date</div>
                    <div className="detail-value">{formatFullDate(task.createdAt)}</div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => toggleComplete(task.id)}
                        className={`btn ${task.completed ? 'btn-outline' : 'btn-success'}`}
                    >
                        {task.completed ? '↩ Mark as Pending' : '✓ Mark as Done'}
                    </button>
                    <button onClick={handleDelete} className="btn btn-danger">
                        Delete Task
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskDetailPage;