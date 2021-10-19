import React from 'react';

const ToDo = ({text}) => {
    return (
        <div className="toDo">
            <li>{text}</li>
            <button ><i className="fas fa-check"></i></button>
            <button><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default ToDo;