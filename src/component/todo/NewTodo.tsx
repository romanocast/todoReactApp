import TodoForm from "./TodoForm";
import { TodoImpl } from "../../model/todo";
import { Typography } from "@material-ui/core";

interface NewTodoProps {}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    return (<>
        <Typography variant='h3'>Create a ToDO</Typography>
        <TodoForm
            todo={new TodoImpl('')}
            submitText='Create a new ToDo'
            submitFunction={(todo) => {
                console.log('new todo: ', todo)
            }}
            resetFormAfterSubmit={true}

        />
        </>
    )
}
export default NewTodo