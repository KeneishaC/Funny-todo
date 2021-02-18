import React, { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState('')


    return (
        <form className='todo-form'> 
            <input 
                type='text' 
                placeholder='Add a funny todo' 
                value={input} 
                name='text' 
                className='todo'
            />
            <button className='todo-button'> Add funny todo</button>
        </form>
    )
}

export default TodoForm
