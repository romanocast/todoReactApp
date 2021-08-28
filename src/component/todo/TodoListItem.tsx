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
import { PersonPinCircleSharp } from '@material-ui/icons'
import { useStoreActions } from "../../store/StoreModel";



interface TodoListItemProps {
    todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
     // 2) Retrieve the delete action
     const deleteTodo = useStoreActions(actions => actions.todoModel.delete)
     // 3) Retrieve the toggle action
     const toggleCompleted = useStoreActions(actions => actions.todoModel.toggleCompleted)
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
            <ListItemText primary={todo.title} />
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