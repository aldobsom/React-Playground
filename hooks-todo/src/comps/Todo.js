import React from 'react';

const Todo = ({todo, index, complete, remove}) => {
  // console.log(index);

  return (
  <div className={todo.isCompleted ? "todo completed" : "todo"}>{todo.text}
       <div>
          <button onClick={() => complete(index)}>{todo.isCompleted ? "Undone" : "Done"}</button>
          <button onClick={() => remove(index)}> X </button>
        </div>
  </div>)
} 

export default Todo;