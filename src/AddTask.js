import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const AddTask = (props) => {

    const [input, setInput] = useState("");

    const buttonClick = (e) => {
        e.preventDefault();
        props.setTodoList(oldArr => [...oldArr, input])
        setInput("");
    }


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter new task" onChange={e => setInput(e.target.value)} value={input} style={{boxShadow: "1px 1px 10px black"}} />
            </Form.Group>
            <div className="mb-2">
                <Button style={{ boxShadow: "1.5px 1.5px 10px black", textShadow: "1.5px 1.5px 10px black" , marginLeft: "30%" }} variant="secondary" size="lg" onClick={buttonClick} type="submit" >
                    Add Task
                </Button>
            </div>
        </Form>
    )
}

export default AddTask