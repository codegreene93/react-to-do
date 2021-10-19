import React from 'react';

const ToDo = ({text, todo, todos, setToDos}) => {
    //events
    const deleteHandler = () =>{
        setToDos(todos.filter((el) => el.id !== todo.id))
    }
    return (
        <div className="toDo">
            <li>{text}</li>
            <button ><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default ToDo;