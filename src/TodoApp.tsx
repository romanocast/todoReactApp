import React from 'react';
import AppLayout from './component/application/AppLayout';
import TodoPage from './component/todo/TodoPage';
import TodoHeader from './component/todo/TodoHeader';

const TodoApp: React.FC = () => {
  return (
   <AppLayout header= {<TodoHeader/>} body={<TodoPage/>}/>
  );
}
export default TodoApp
