import React from 'react'
import { List } from '@material-ui/core'

import TodoListItem from './TodoListItem'
import { useStoreState } from "../../store/StoreModel";


const TodoList: React.FC = () => {
    // Get the date from the store
    const todoList = useStoreState(state => state.todoModel.todos)
    return(
        <List>
             {/* use the data to create TodoListItem
                Always use key={todo.id} because Lists need a unique key
            */}
            {todoList.map((todo) => 
                { return <TodoListItem key={todo.id} todo={todo}/> }
            )}
        </List>
    )
}

export default TodoList