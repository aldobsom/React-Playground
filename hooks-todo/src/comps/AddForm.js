import React, {useState} from 'react';

const AddForm = ({addTodo, todos}) => {
  const [value, setValue] = useState('');

  // const addTodo = (text) => {
  //   const newTodos = [...todos, {text: text}];
  //   console.log(todos);
  //   return newTodos;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
  }

  return (
     <form onSubmit={handleSubmit} className="todo-list">
       <input type="text" value={value} placeholder="Add new" onChange={e=>setValue(e.target.value)} className="addtodo"/>
    </form>
   )
}

export default AddForm;