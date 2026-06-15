// src/pages/CompletedTasksPage.jsx
import { useEffect } from 'react';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';

function CompletedTasksPage({ tasks, deleteTask, toggleComplete }) {
    const completedTasks = tasks.filter(task => task.completed === true);

    useEffect(() => {
        document.title = 'Completed Tasks | SmartTodo App';
    }, []);

    return (
        <div>
            <div className="page-header">
                <h1>✅ Completed Tasks</h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    You have completed {completedTasks.length} out of {tasks.length} tasks
                </p>
            </div>

            {completedTasks.length === 0 ? (
                <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        No completed tasks yet. Keep going!
                    </p>
                    <Link to="/tasks">
                        <button className="btn btn-primary"> Add Some Tasks</button>
                    </Link>
                </div>
            ) : (
                <TaskList
                    tasks={completedTasks}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTask}
                />
            )}
        </div>
    );
}

export default CompletedTasksPage;