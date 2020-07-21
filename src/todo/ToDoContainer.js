import React, { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './ToDoList';

function TodoContainer(){
    const [todos, setTodos] = useState([]);

    const onCreateTodoClick = text => {
        setTodos([
            ...todos,
            text
        ]);
    };

    const deleteTodoClick = text => {
        const newTodos = todos.filter((item)=>item !== text);
        setTodos(newTodos);
    }

    return(
        <div>
            <CreateTodo onCreateTodo={onCreateTodoClick}/>
            <TodoList list={todos} onDeleteTodoClick={deleteTodoClick}/>
        </div>
    )
}

export default TodoContainer;