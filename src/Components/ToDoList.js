import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, setToDos}) => {
    console.log(todos)
    return (
       <div>
           <ul>
               {todos.map((todo) => (
                   <ToDo setToDos={setToDos} 
                   todos={todos} 
                   todo={todo}
                   key={todo.id}
                   text={todo.text}/>
               ))}
           </ul>
       </div>
    )
}

export default ToDoList;