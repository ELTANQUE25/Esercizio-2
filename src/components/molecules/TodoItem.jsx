import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div>
        <div className="flex items-center">
          <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
        </div>
        <span className="text-xs text-gray-500">Creato il {todo.createdAt}</span>
      </div>
      <Button className='delete-button' onClick={() => deleteTodo(todo.id)}>X</Button>
    </div>
  )
}
