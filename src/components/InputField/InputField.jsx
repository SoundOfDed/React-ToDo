import React from 'react';
import classes from './InputField.module.css'

const InputField = ({text, setText, addTodo}) => {
    return (
        <div className={classes.addTodo}>
            <textarea onChange={e => { setText(e.target.value) }} value={text}></textarea>
            <button onClick={addTodo}>AddTodo</button>
        </div>

    );
}

export default InputField;
