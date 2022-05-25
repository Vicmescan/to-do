import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.css';



const Lists = ({ todoList, setTodoList, inProgressList, setInProgressList }) => {

  // function to delete item from list
  const delet = (index) => {
    const listTask = [...todoList];
    listTask.splice(index, 1);
    setTodoList(listTask);
  }

  // function to move item from todo to inprogress
  const toInProgressList = (index) => {
    const listTask = [...todoList];
    const listInProgress = [...inProgressList];
    listInProgress.push(todoList[index]);
    listTask.splice(index, 1);
    setTodoList(listTask);
    setInProgressList(listInProgress);
  }

  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center", textDecoration: "underline", textShadow: "0.5px 0.5px grey" }} >To Do</Card.Title>
          <ListGroup variant="flush">
            {todoList.map((item, index) =>
            (<div className='item' key={index} >
              <ListGroup.Item className="me-2 d-flex justify-content-between" >
                <AiFillDelete style={{ color: "red", fontSize: "1.5rem", cursor: " pointer"}} data-index={index} onClick={() => { delet(index) }} />
                {item}
                <BsArrowRightCircleFill style={{ color: "blue", fontSize: "1.5rem", cursor: " pointer" }} data-index={index} onClick={() => toInProgressList(index)} />
              </ListGroup.Item>
            </div>)
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Lists
