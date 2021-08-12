import React, { useState } from 'react'
import Form from './Form'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo || /^\s+$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)

    }

    const updatedTodos = (todoId, newValue) => {
        if (!newValue || /^\s+$/.test(newValue.text)) {
            return
        }

        setTodos(pre => pre.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => {
            return todo.id !== id
        })

        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updatedTodos)
        localStorage.setItem('todos', )
    }

   

    
    return (
        <div>
            <h1>ToDo List 🥰🥰😘</h1>
            <Form onSubmit={addTodo} />
            <Todo todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updatedTodos={updatedTodos}
            />
        </div>
    )
}

export default TodoList
