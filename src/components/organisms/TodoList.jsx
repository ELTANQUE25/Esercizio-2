import TodoItem from '../molecules/TodoItem'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="border rounded">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}
