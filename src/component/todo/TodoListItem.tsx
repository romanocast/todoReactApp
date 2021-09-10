import React from 'react'
import { 
    ListItem, 
    ListItemIcon,
    ListItemText, 
    Checkbox, 
    ListItemSecondaryAction,
    IconButton,
    Typography,
 } from '@material-ui/core'
import Todo from '../../model/todo'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { useStoreActions, useStoreState } from "../../store/StoreModel";


interface TodoListItemProps {
    todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
     // 2) Retrieve the delete action
     const deleteTodo = useStoreActions(actions => actions.todoModel.delete)
     // 3) Retrieve the toggle action
     const toggleCompleted = useStoreActions(actions => actions.todoModel.toggleCompleted)
     const selectedTodo = useStoreState(state => state.todoModel.selectedTodo)
    const setSelectedTodo = useStoreActions(actions => actions.todoModel.setSelectedTodo)
    return (
        <ListItem >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    color='primary'
                    checked={todo.completed}
                    
                    onClick={() => { toggleCompleted(todo) }}
                />
            </ListItemIcon>
            <Typography
                noWrap
                onClick={() => { setSelectedTodo(todo) }}
                >
                {todo.title}
            </Typography>
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    color='secondary'
                    aria-label="delete todo"
                    
                    onClick={() => { deleteTodo(todo) }}
                />
                <DeleteForeverIcon />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem