import { RoomRounded } from "@material-ui/icons";
import { resolve } from "q";
import React from "react";
import Todo from '../model/todo'
import todos from '../repository/simple_todo_repository'


//npm install shortid

const shortid = require('shortid');

class FakeTodoService implements TodoService {

    _todos: Todo[]

    constructor() {
        this._todos = [];
    }

    async getTodoList(): Promise<Todo[]> {
        this._todos = todos
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this._todos), 1000)
        })
    }

    async addTodo(todo: Todo): Promise<Todo> {
        //Add a unique id
        todo.id = shortid.shortid.generate()
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this._todos), 1000)
        })
    }

    async deleteToDo(todo: Todo): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 100)
        })
    }

    async updateToDo(todo: Todo): Promise<Todo> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(todo), 100)
        })
    }
}

const todoService = new FakeTodoService()

interface TodoService {
    getTodoList(): Promise<Todo[]>

    addTodo(todo: Todo): Promise<Todo>
    deleteToDo(todo: Todo): Promise<void>
    updateToDo(todo: Todo): Promise<Todo>
}

export default TodoService