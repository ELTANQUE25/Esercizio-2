import { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Aggiungi un task..." />
      <Button className='add.button' type="submit">Aggiungi</Button>
    </form>
  )
}
