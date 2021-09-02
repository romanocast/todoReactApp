import { Grid } from "@material-ui/core";
import React from "react";
import TodoList from "./TodoList";

const TodoContent: React.FC = () => {
    return(
        <Grid container direction='row' spacing={1}>
            <Grid item xs={12} sm={4}>
                <TodoList/>
            </Grid>
            <Grid item xs={12} sm={8}>
                <TodoList/>
            </Grid>
        </Grid>
    )
}