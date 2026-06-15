// src/pages/TasksPage.jsx
import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterButtons from '../components/FilterButtons';

function TasksPage({ tasks, addTask, deleteTask, toggleComplete }) {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        document.title = 'Tasks | SmartTodo App';
    }, []);

    // Apply filters and search
    const filteredTasks = tasks.filter(task => {
        const matchesFilter =
            filter === 'All' ? true :
                filter === 'Completed' ? task.completed :
                    filter === 'Pending' ? !task.completed : true;

        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div>
            <div className="page-header">
                <h1> My Tasks</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage, organize, and complete your daily tasks</p>
            </div>

            <TaskForm addTask={addTask} />

            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <FilterButtons currentFilter={filter} setFilter={setFilter} />
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder=" Search tasks by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '250px' }}
                    />
                </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Showing {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
                </p>
                <TaskList
                    tasks={filteredTasks}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTask}
                />
            </div>
        </div>
    );
}

export default TasksPage;