import React from "react";

const TodoHeader: React.FC = () => {
    return (
        <>
        <h1>ToDo Application</h1>
        <ul>
            <li><a href="/about">About Page</a></li>
            <li><a href="/todo">Todo Page</a></li>
        </ul>
        </>
    );
}

export default TodoHeader