import React, {useState} from 'react';
import './App.css';
import Todo from './Todo';
import AddForm from './AddForm';

const App = () => {
  const [todos, setTodos] = useState([
    { text: "text 1", isCompleted: false },
    { text: "text 2", isCompleted: true },
    { text: "text 3", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text: text, isCompleted: false}];
    setTodos(newTodos);
  }

  const todoList = todos.map( (todo, index) => {
    return <Todo key = {index} index = {index} todo = {todo} />
  } ); 

  return (
    <div className="App">
      <div className="todo-list">{todoList}</div>
      <div>
        <AddForm addTodo={addTodo} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
