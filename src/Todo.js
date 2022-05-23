import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Lists = (props) => {


  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center", textDecoration: "underline" }} >To Do</Card.Title>
          <ListGroup variant="flush">
            {props.todoList.map((item, index) => 
                <ListGroup.Item key={index} >{item}</ListGroup.Item>
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Lists