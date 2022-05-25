import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.css';

const InProgress = ({ todoList, setTodoList, inProgressList, setInProgressList, doneList, setDoneList }) => {

    // function to move item from inprogress to todo
    const toTodoList = (index) => {
        const listTask = [...inProgressList];
        const listDone = [...todoList];
        listDone.push(inProgressList[index]);
        listTask.splice(index, 1);
        setInProgressList(listTask);
        setTodoList(listDone);
    }

    // function to move item from inprogress to done
    const toDoneList = (index) => {
        const listTask = [...inProgressList];
        const listDone = [...doneList];
        listDone.push(inProgressList[index]);
        listTask.splice(index, 1);
        setInProgressList(listTask);
        setDoneList(listDone);
    }


    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center", textDecoration: "underline", textShadow: "0.5px 0.5px grey" }} >In Progress</Card.Title>
                    <ListGroup variant="flush">
                        {inProgressList.map((item, index) =>
                        (<div className='item' key={index}>
                            <ListGroup.Item className="me-2 d-flex justify-content-between" >
                                <BsArrowLeftCircleFill style={{ color: "blue", fontSize: "1.5rem", cursor: " pointer" }} data-index={index} onClick={() => toTodoList(index)} />
                                {item}
                                <BsArrowRightCircleFill style={{ color: "blue", fontSize: "1.5rem", cursor: " pointer" }} data-index={index} onClick={() => toDoneList(index)} />
                            </ListGroup.Item>
                        </div>)
                        )}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default InProgress