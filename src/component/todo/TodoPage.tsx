import React from "react";
import TodoContent from './TodoContent';
import { Grid, } from '@material-ui/core'
import TodoStatus from "./TodoStatus";


const TodoPage: React.FC = () => {
    return (
        <Grid container direction='row' spacing={1}>
            <Grid item xs={12}>
                <TodoStatus />
            </Grid>
            <Grid item xs={12}>
                <TodoContent />
            </Grid>
        </Grid>
    );
}

export default TodoPage
