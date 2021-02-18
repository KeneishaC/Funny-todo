import React, { useState } from 'react'
import TodoFrom from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const [ todos, setTodos ] = useState('')

    const addTodo = (todo) => {
        //when you make a space it will save it will be saved that way
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        } 
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        // console.log(...todos)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.localeCompare(todo => {
            if(todo.id === id){
                todo.isComplete =!todo.isComplete
            } 
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>What's the plan for today</h1>
            <TodoFrom onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} />
        </div>
    )
}

export default TodoList
