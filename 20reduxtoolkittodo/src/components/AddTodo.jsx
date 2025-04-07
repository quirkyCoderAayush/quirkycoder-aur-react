import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() === '') return
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div className="todo-form">
      <h2 className="form-title">✨ Add New Task ✨</h2>
      <form onSubmit={addTodoHandler} className="form-container">
        <input
          type="text"
          className="todo-input"
          placeholder="✍️ Enter your task here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="add-button"
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTodo
