import TodoForm from "./TodoForm";
import { TodoImpl } from "../../model/todo";
import { Typography } from "@material-ui/core";

interface EditTodoProps {}

const EditTodo: React.FC<EditTodoProps> = (props) => {
    //Todo: get the actual todo and show it
    var existingTodo = new TodoImpl('I\'m an existing todo')
    existingTodo.id = 42
    return (
        <>
        <Typography variant='h3'>
            Edit a ToDo
        </Typography>
        <TodoForm
            todo={existingTodo}
            submitText='Edit ToDo'
            submitFunction={(todo)=>{console.log
            ('edited todo: ', todo)}}
            resetFormAfterSubmit={false}
        />
        </>
    )
}
export default EditTodo