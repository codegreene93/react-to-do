import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos}) => {
    console.log(todos)
    return (
       <div>
           <ul>
               {todos.map((todo) => (
                   <ToDo key={todo.id} text={todo.text}/>
               ))}
           </ul>
       </div>
    )
}

export default ToDoList;