import React, { useState } from 'react'

function TodoForm( props) {
    const [input, setInput] = useState('')

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
            <input 
                type='text' 
                placeholder='Add a funny todo' 
                value={input} 
                name='text' 
                className='todo'
                onChange={handleChange}
            />
            <button className='todo-button'> Add funny todo</button>
        </form>
    )
}

export default TodoForm
