import './App.css';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from './store/todoSlice'
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  };

  return (
    <div className='container'>
      <div className="App">
        <div className="inputField">
          <InputField text={text} setText={setText} addTodo={addTask} />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;

