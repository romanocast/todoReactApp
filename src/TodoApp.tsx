import React from 'react';
import AppLayout from './component/application/AppLayout';
import TodoPage from './component/todo/TodoPage';
import TodoHeader from './component/todo/TodoHeader';
import PageNotFoundPage from './component/notfound/PageNotFoundPage';
import { useLocation } from 'react-router-dom';
import AboutPage from './component/about/AboutPage';

const TodoApp: React.FC = () => {
  let body = <PageNotFoundPage/>

  /* ginge auch let location = useLocation()
                switch(location.pathname) */
  switch (useLocation().pathname) {
    /* Wenn jemand / eingibt kommt... wenn jemand /todo eingiebt kommt er auf. wenn jemand About eingiebt kommt er auf */
    case '/': {body = <TodoPage/>; break}
    case '/todo': {body= <TodoPage/>; break}
    case '/about': {body = <AboutPage/>; break}
  }
  return (
    
   <AppLayout header= {<TodoHeader/>} body={body}/>
  );
}
export default TodoApp
