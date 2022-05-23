import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Done = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title style={{textAlign:"center", textDecoration:"underline"}} >Done</Card.Title>
          <ListGroup variant="flush">
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Done