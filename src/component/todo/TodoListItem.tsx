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


interface TodoListItemProps {
    todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
    return (
        <ListItem key={props.todo.id}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={props.todo.completed}
                    onClick={() => {/* should toggle completed*/ }}
                />
            </ListItemIcon>
            <ListItemText pri={props.todo.title} />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="delete todo"
                    onClick={() = {/* should delete todo*/ }}
                />
                <DeleteForeverIcon />
            </ListItemSecondaryAction>
        </ListItem>
    )
}