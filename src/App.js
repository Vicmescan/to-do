import React, { useState, useEffect } from 'react'
import './App.css';
import Todo from './Todo';
import InProgress from './InProgress';
import Done from './Done';
import AddTask from './AddTask';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  // when the app renders, we want to get the elements of the three lists from local storage
  const previousTodoList = localStorage.getItem(`Task`) ? JSON.parse(localStorage.getItem(`Task`)) : [];
  const previousProgressList = localStorage.getItem(`InProgress`) ? JSON.parse(localStorage.getItem(`InProgress`)) : [];
  const previousDoneList = localStorage.getItem(`Done`) ? JSON.parse(localStorage.getItem(`Done`)) : [];


  // we set the state of the three lists to the local storage at the beginning of the app, and then we update the state of the three lists when we add or delete an element from the three lists
  const [todoList, setTodoList] = useState(previousTodoList);
  const [inProgressList, setInProgressList] = useState(previousProgressList);
  const [doneList, setDoneList] = useState(previousDoneList);

  // we use useEffect to update the local storage when we add or delete an element from the three lists
  useEffect(() => {
    localStorage.setItem(`Task`, JSON.stringify(todoList))
    localStorage.setItem(`InProgress`, JSON.stringify(inProgressList))
    localStorage.setItem(`Done`, JSON.stringify(doneList))
  }, [todoList, inProgressList, doneList]);


  return (
    <div className='app' >
      {/* main title */}
      <h1 className='mainTitle' >To Do</h1>
      {/* component to add a task to the todo list */}
      <AddTask setTodoList={setTodoList} />
      <div className='lists d-flex flex-column flex-xl-row'>
        {/* to do list */}
        <Todo
          todoList={todoList}
          setTodoList={setTodoList}
          inProgressList={inProgressList}
          setInProgressList={setInProgressList} />
        {/* in progress list */}
        <InProgress
          todoList={todoList}
          setTodoList={setTodoList}
          inProgressList={inProgressList}
          setInProgressList={setInProgressList}
          doneList={doneList}
          setDoneList={setDoneList} />
        {/* done list */}
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
