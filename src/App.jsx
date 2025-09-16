import { useState } from 'react'
import TodoForm from './components/organisms/TodoForm'
import TodoList from './components/organisms/TodoList'
import FilterGroup from './components/molecules/FilterGroup'

export default function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [theme, setTheme] = useState('light')

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className={`min-h-screen p-6 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-md mx-auto">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="mb-4 px-4 py-2 rounded bg-indigo-500 text-white"
        >
          Cambia Tema
        </button>

        <TodoForm addTodo={addTodo} />
        <FilterGroup setFilter={setFilter} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

        <p className="mt-4 text-sm">{todos.filter(t => !t.completed).length} task rimanenti</p>
      </div>
    </div>
  )
}
