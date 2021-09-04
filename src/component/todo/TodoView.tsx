import React from "react"
import TodoForm from "./TodoForm"



const TodoView: React.FC = () => {
    return (
        <>
        <NewTodo />
        <EditTodo />
        </>
    )
}

export default TodoView