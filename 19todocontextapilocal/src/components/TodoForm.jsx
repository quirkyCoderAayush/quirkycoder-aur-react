import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {

    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return;

        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form
            onSubmit={add}
            style={{ display: 'flex' }}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                style={{
                    width: '100%',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderTopLeftRadius: '0.5rem',
                    borderBottomLeftRadius: '0.5rem',
                    padding: '0.375rem 0.75rem',
                    outline: 'none',
                    backgroundColor: 'rgba(255,255,255,0.2)'
                }}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                style={{
                    borderTopRightRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: '#16a34a',
                    color: 'white',
                    flexShrink: 0
                }}
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;