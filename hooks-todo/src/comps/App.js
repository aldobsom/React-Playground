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

  const addTodo = (value) => {
    const newTodos = [...todos, {text: value, isCompleted: false}];
    setTodos(newTodos);
  }

   const completeTodo = index => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted){
      newTodos[index].isCompleted = false;
    } else {
      newTodos[index].isCompleted = true;
    }
    setTodos(newTodos);
    // console.log(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); //or a filter() that returns todos that are different than this "index"
    setTodos(newTodos);
  };

  const todoList = todos.map( (todo, index) => {
    return (
      <Todo key = {index} index ={index} todo = {todo} complete={completeTodo} remove={removeTodo}>
      </Todo>
    )
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
