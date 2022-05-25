import React, { useState, useEffect } from 'react'
import './App.css';
import Todo from './Todo';
import InProgress from './InProgress';
import Done from './Done';
import AddTask from './AddTask';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const previousTodoList = localStorage.getItem(`Task`) ? JSON.parse(localStorage.getItem(`Task`)) : [];
  const previousProgressList = localStorage.getItem(`InProgress`) ? JSON.parse(localStorage.getItem(`InProgress`)) : [];
  const previousDoneList = localStorage.getItem(`Done`) ? JSON.parse(localStorage.getItem(`Done`)) : [];

  const [todoList, setTodoList] = useState(previousTodoList);
  const [inProgressList, setInProgressList] = useState(previousProgressList);
  const [doneList, setDoneList] = useState(previousDoneList);

  useEffect(() => {
    localStorage.setItem(`Task`, JSON.stringify(todoList))
    localStorage.setItem(`InProgress`, JSON.stringify(inProgressList))
    localStorage.setItem(`Done`, JSON.stringify(doneList))
  }, [todoList, inProgressList, doneList]);


  return (
    <div className='app' >
      <h1 className='mainTitle' >To Do</h1>
      <AddTask setTodoList={setTodoList} />
      <div className='lists d-flex flex-column flex-xl-row'>
        <Todo
          todoList={todoList}
          setTodoList={setTodoList}
          inProgressList={inProgressList}
          setInProgressList={setInProgressList} />
        <InProgress
          todoList={todoList}
          setTodoList={setTodoList}
          inProgressList={inProgressList}
          setInProgressList={setInProgressList}
          doneList={doneList}
          setDoneList={setDoneList} />
        <Done
          inProgressList={inProgressList}
          setInProgressList={setInProgressList}
          doneList={doneList}
          setDoneList={setDoneList} />
      </div>
    </div>
  )
}

export default App;
