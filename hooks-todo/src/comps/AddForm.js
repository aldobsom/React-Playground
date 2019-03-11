import React, {useState} from 'react';

const AddForm = ({addTodo, todos}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
     <form onSubmit={handleSubmit} className="todo-list">
       <input type="text" value={value} placeholder="Add new" onChange={e=>setValue(e.target.value)} className="addtodo"/>
    </form>
   )
}

export default AddForm;