import TodoForm from "./TodoForm";
import { TodoImpl } from "../../model/todo";
import { Grid, Typography } from "@material-ui/core";
import { useStoreActions } from '../../store/StoreModel'

interface NewTodoProps {}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const addTodo = useStoreActions(actions => actions.todoModel.add)

    return (<>
        <Grid container direction='column' spacing={1}>
            <Grid item >
                <Typography variant='h3'>Add a new ToDo</Typography>
            </Grid>
            <Grid item >
                <TodoForm 
                    todo={new TodoImpl('')}
                    submitText='Create new ToDo'
                    submitFunction={(todo) => { addTodo(todo) }}
                    resetFormAfterSubmit={true}
                />
            </Grid>
        </Grid>
        </>
    )
}
export default NewTodo