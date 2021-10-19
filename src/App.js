import React, {useState} from 'react';

//components
import Header from './Components/header';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';



function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setToDos] = useState([]);

  return (
    <div className="App">
        <Header />
        <Form inputText={inputText} todos={todos} setToDos={setToDos} setInputText={setInputText}/>
        <ToDoList setToDos={setToDos} todos={todos} />
    </div>
  );
}

export default App;
