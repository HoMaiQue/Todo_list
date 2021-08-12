import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti'
import Form from './Form'
function Todo({ todos, completeTodo, removeTodo, updatedTodos}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updatedTodos(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => { completeTodo(todo.id) }}>
                {todo.text}
            </div>
            <div className="icon">
                <AiOutlineClose onClick={() => removeTodo(todo.id)} className="delete-icon" />
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
            </div>
        </div>
    )
    );
}

export default Todo
