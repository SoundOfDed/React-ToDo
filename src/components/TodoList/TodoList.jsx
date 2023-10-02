import React from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css'
import {useSelector} from 'react-redux' 

const TodoList = ({removeTodo, toggleCompletedTodo}) => {

    const todos = useSelector(state => state.todos.todos);

    return (
        <ul className={classes.TodoList}>
            {
            todos.map(
                todo => 
                <TodoItem 
                key={todo.id}
                {...todo}/>
            )}      
        </ul>
    );
}

export default TodoList;
