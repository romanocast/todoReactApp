import React from "react"
import NewTodo from "./NewTodo"
import TodoForm from "./TodoForm"
import EditTodo from "./EditTodo"



const TodoView: React.FC = () => {
    return (
        <>
        <NewTodo />
        <EditTodo />
        </>
    )
}

export default TodoView