import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.title)
  }

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: editingId, title: editText }))
      setEditingId(null)
      setEditText('')
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="todos-container">
      <div>Todos</div>
      {todos.todos.map(todo => (
        <div key={todo.id} className={`todo-item ${todo.completed ? 'todo-item-completed' : 'todo-item-pending'}`}>
          {editingId === todo.id ? (
            <div className="edit-form">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
                autoFocus
              />
              <div className="edit-actions">
                <button
                  className="save-button"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="todo-checkbox-container">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span className={`todo-text ${todo.completed ? 'todo-text-completed' : ''}`}>
                  {todo.title}
                </span>
              </div>
              <div className="todo-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
      {todos.todos.length === 0 && (
        <div className="empty-todos">
          <span className="empty-emoji">📝</span>
          <p className="empty-text">No todos yet</p>
          <p className="empty-subtext">Add a new todo to get started</p>
        </div>
      )}
    </div>
  )
}

export default Todos
