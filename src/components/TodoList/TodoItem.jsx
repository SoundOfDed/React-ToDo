import React from 'react';
import classes from './TodoItem.module.css'
import { removeTodo, toggleCompletedTodo } from '../../store/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({id, completed, text}) => {
    const dispatch = useDispatch();
    return (
        <li key={id}>
            <input type='checkbox' checked={completed} onChange={() => { dispatch(toggleCompletedTodo({id})) }} />
            <span>{text}</span>
            <span className={classes.delete} onClick={() => { dispatch(removeTodo({id})) }}>&times;</span>
        </li>
    );
}

export default TodoItem;
