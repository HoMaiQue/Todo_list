import React, { useState, useRef, useEffect } from 'react'

function Form(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        name="text"
                        placeholder="Update something"
                        value={input}
                        onChange={handleChange}
                        ref={inputRef}
                        className="todo-input edit"
                    />
                    <button
                        className='todo-button edit'
                    >Update</button>
                </>) : (
                <>
                    <input
                        type="text"
                        name="text"
                        placeholder="add something"
                        value={input}
                        onChange={handleChange}
                        ref={inputRef}
                        className="todo-input"
                    />
                    <button
                        className='todo-button'
                    >Add item</button>
                </>)}

        </form>
    )
}

export default Form
