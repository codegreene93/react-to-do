import React from 'react';

const ToDo = ({text, todo, todos, setToDos}) => {
    //events
    const deleteHandler = () =>{
        setToDos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = () => {
        setToDos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="toDo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler}><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default ToDo;