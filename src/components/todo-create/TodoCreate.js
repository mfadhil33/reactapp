import './TodoCreate.css';
import { useState } from 'react';
const TodoCreate = (props) => {
    const [ getinputTodo , setInputTodo ] =  useState('');
  const handleSubmit = (event) =>   {
  event.preventDefault();

  const newTodo = {

   id: Math.floor(Math.random() * 100) + 1,
   title: getinputTodo
}
  props.onCreateTodo(newTodo);
  setInputTodo('');
//console.log(newTodo);
}
  const handleInputTodo = (event) => {
  setInputTodo(event.target.value);
   console.log(getinputTodo);
}
         return (
        
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={getinputTodo} onChange={handleInputTodo} />
            <button type='submit'>add</button>
        </form>
        )   
}

export default TodoCreate;