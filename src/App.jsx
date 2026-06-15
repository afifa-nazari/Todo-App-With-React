// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TasksPage from './pages/TasksPage';
import TaskDetailPage from './pages/TaskDetailPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import NotFound from './pages/NotFound';

// Default sample tasks
const defaultTasks = [
  {
    id: 1,
    title: 'Complete React Assignment',
    description: 'Build the Smart Todo List app with all required features including routing and localStorage.',
    priority: 'High',
    completed: false,
    createdAt: new Date('2025-04-10').toISOString(),
  },
  {
    id: 2,
    title: 'Review Pull Requests',
    description: 'Check team members PRs and provide feedback.',
    priority: 'Medium',
    completed: false,
    createdAt: new Date('2025-04-11').toISOString(),
  },
  {
    id: 3,
    title: 'Buy Groceries',
    description: 'Milk, eggs, bread, vegetables, and fruits.',
    priority: 'Low',
    completed: true,
    createdAt: new Date('2025-04-09').toISOString(),
  },
  {
    id: 4,
    title: 'Team Meeting',
    description: 'Weekly sync with development team at 2 PM.',
    priority: 'High',
    completed: false,
    createdAt: new Date('2025-04-12').toISOString(),
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      return JSON.parse(stored);
    }
    return defaultTasks;
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle complete status
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Update task (for future expansion)
  const updateTask = (id, updatedData) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, ...updatedData } : task
    ));
  };

  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/tasks"
              element={
                <TasksPage
                  tasks={tasks}
                  addTask={addTask}
                  deleteTask={deleteTask}
                  toggleComplete={toggleComplete}
                />
              }
            />
            <Route
              path="/tasks/:id"
              element={
                <TaskDetailPage
                  tasks={tasks}
                  deleteTask={deleteTask}
                  toggleComplete={toggleComplete}
                />
              }
            />
            <Route
              path="/completed"
              element={
                <CompletedTasksPage
                  tasks={tasks}
                  deleteTask={deleteTask}
                  toggleComplete={toggleComplete}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;