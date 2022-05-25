import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.css';

const Done = ({ inProgressList, setInProgressList, doneList, setDoneList }) => {

    const delet = (index) => {
        const listTask = [...doneList];
        listTask.splice(index, 1);
        setDoneList(listTask);
    }

    const toInProgressList = (index) => {
        const listTask = [...doneList];
        const listInProgress = [...inProgressList];
        listInProgress.push(doneList[index]);
        listTask.splice(index, 1);
        setDoneList(listTask);
        setInProgressList(listInProgress);
    }

    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: "center", textDecoration: "underline", textShadow: "0.5px 0.5px grey" }} >Done</Card.Title>
                    <ListGroup variant="flush">
                        {doneList.map((item, index) =>
                        (<div className='item' key={index}>
                            <ListGroup.Item className="me-2 d-flex justify-content-between" >
                                <BsArrowLeftCircleFill style={{ color: "blue", fontSize: "1.5rem", cursor: " pointer" }} data-index={index} onClick={() => toInProgressList(index)} />
                                {item}
                                <AiFillDelete style={{ color: "red", fontSize: "1.5rem", cursor: " pointer" }} data-index={index} onClick={() => { delet(index) }} />
                            </ListGroup.Item>
                        </div>)
                        )}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Done