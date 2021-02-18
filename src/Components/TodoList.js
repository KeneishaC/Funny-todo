import React, { useState } from 'react'
import TodoFrom from './TodoForm'


function TodoList() {
    const [ todos, setTodos ] = useState('')

    return (
        <div>
            <h1>What's the plan for today</h1>
            <TodoFrom />
        </div>
    )
}

export default TodoList
