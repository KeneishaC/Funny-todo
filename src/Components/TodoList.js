import React, { useState } from 'react'
import TodoFrom from './TodoForm'


function TodoList() {
    const [ todos, setTodos ] = useState('')

    const addTodo = (todo) => {
        //when you make a space it will save it will be saved that way
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        } 
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    return (
        <div>
            <h1>What's the plan for today</h1>
            <TodoFrom onSubmit={addTodo} />
        </div>
    )
}

export default TodoList
