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
    if (editText.trim() !== '') {
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
      <div>Your Tasks</div>
      {todos.todos.length === 0 ? (
        <div className="empty-todos">
          <span className="empty-emoji">📝</span>
          <p className="empty-text">Your task list is empty!</p>
          <p className="empty-subtext">Add a task to get started on your productivity journey.</p>
        </div>
      ) : (
        <div className="todos-list">
          {todos.todos.map(todo => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? 'todo-item-completed' : 'todo-item-pending'}`}
            >
              {editingId === todo.id ? (
                // Edit mode
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
                // View mode
                <>
                  <div className="todo-checkbox-container">
                    <input
                      type="checkbox"
                      className="todo-checkbox"
                      checked={todo.completed}
                      onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <span
                      className={`todo-text ${todo.completed ? 'todo-text-completed' : ''}`}
                    >
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
        </div>
      )}
    </div>
  )
}

export default Todos
