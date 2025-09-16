import React, { useState, useEffect } from 'react';
import TodoForm from './components/organisms/TodoForm';
import TodoList from './components/organisms/TodoList';
import FilterGroup from './components/molecules/FilterGroup';
import './index.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="container">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="button"
      >
        Cambia Tema
      </button>

      <TodoForm addTodo={addTodo} />
      <FilterGroup setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      <p className="info-text">
        {todos.filter((t) => !t.completed).length} task rimanenti
      </p>
    </div>
  );
}