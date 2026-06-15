// src/components/TaskList.jsx
import TaskCard from './TaskCard';

function TaskList({ tasks, onToggleComplete, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <p style={{ color: 'var(--text-secondary)' }}>No tasks found. Add a new task to get started!</p>
            </div>
        );
    }

    return (
        <div className="task-grid">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;
