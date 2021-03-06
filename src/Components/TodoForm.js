import React, { useState, useEffect, useRef } from 'react'

function TodoForm( props) {
    //sets the value of each todo
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            //making the chances of getting the same id unlikely
            id: Math.floor(Math.random() * 1000),
            text: input 
        })
        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}> 
            {props.edit ? (
            <>
            <input 
                type='text' 
                placeholder='Update your todo' 
                value={input} 
                name='text' 
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button edit'>Update</button>
             </>
            ) : (
                <>
                <input 
                type='text' 
                placeholder='Add a funny todo' 
                value={input} 
                name='text' 
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button'> Add funny todo</button>
            </>
            )}
           
        </form>
    )
}

export default TodoForm
