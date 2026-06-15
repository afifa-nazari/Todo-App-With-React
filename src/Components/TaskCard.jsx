// src/components/TaskCard.jsx
import { useNavigate } from 'react-router-dom';

function TaskCard({ task, onToggleComplete, onDelete }) {
    const navigate = useNavigate();

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'Low': return 'priority-low';
            case 'Medium': return 'priority-medium';
            case 'High': return 'priority-high';
            default: return '';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className={`card ${task.priority === 'High' ? 'task-card-high' : ''}`}>
            <div className="task-card">
                <div className="task-info">
                    <div className="task-title">
                        {task.title}
                        <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                            {task.priority}
                        </span>
                        <span className={`task-status ${task.completed ? 'status-done' : 'status-pending'}`}>
                            {task.completed ? '✓ Done' : ' Not Done'}
                        </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        Created: {formatDate(task.createdAt)}
                    </p>
                </div>
                <div className="task-actions">
                    <button
                        onClick={() => onToggleComplete(task.id)}
                        className={`btn ${task.completed ? 'btn-outline' : 'btn-success'}`}
                    >
                        {task.completed ? '↩ Undo' : '✓ Mark as Done'}
                    </button>
                    <button
                        onClick={() => navigate(`/tasks/${task.id}`)}
                        className="btn btn-primary"
                    >
                        View Details
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;