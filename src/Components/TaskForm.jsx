// src/components/TaskForm.jsx
import { useState } from 'react';

function TaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask({ title: title.trim(), description: description.trim(), priority });
        setTitle('');
        setDescription('');
        setPriority('Medium');
    };

    return (
        <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>➕ Add New Task</h3>
            <div className="form-group">
                <label>Task Title *</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                    required
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task description (optional)"
                    rows="3"
                />
            </div>
            <div className="form-group">
                <label>Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
}

export default TaskForm;