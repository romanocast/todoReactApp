import { Action, Thunk, Computed, action, thunk, computed} from 'easy-peasy'

import Todo from './todo'
import todos from '../repository/simple_todo_repository'
import { CallToActionSharp } from '@material-ui/icons'

export interface TodoModel {
    todos: Todo[]

    // Thunks
    initData:           Thunk<TodoModel>

    delete:             Thunk<TodoModel, Todo>
    toggleCompleted:    Thunk<TodoModel, Todo>

    //Actions
    _initData:          Action<TodoModel, Todo[]>
    _delete:            Action<TodoModel, Todo>
    _replace:           Action<TodoModel, Todo>
}

const todoModel: TodoModel = {
    todos: [],

    //Thunks
    initData: thunk(async (actions) => {
        await todoService.getTodoList().then(
            (todoList: Todo[]) => {
                actions._initData(todoList)
            }
        )
    }),

    delete: thunk(async(actions, todo: Todo) => {
        await todoService.deleteToDo(todo).then(() => {
            actions._delete(todo)
        })
    }),
  
    toggleCompleted: thunk(async(actions, todo: Todo) => {
        todo.completed =!todo.completed
        const updatedTodo = await todoService.updateTodo(todo)
        actions._replace(updateTodo)
    }),
    //Actions
    _initData: action((state, todoList) => {
        state.todos = todoList.slice()
        // shallow copy
    }),

    _delete: action((state, todo) => {
        for(var i = 0; i < state.todos.length; i++) {
            if(state.todos[i].id === todo.id){
                state.todos.splice(i, 1);
            }
        }
    }),

    _replace: action(state, todo) => {
        for(var i = 0; i < state.todos.length; i++) {
            if(state.todos[i].id === todoModel.id){
                state.todos[i] = {...todo}
                //copy todo so state changes
            }
        }
    }
    
}

export {todoModel}