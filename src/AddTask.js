import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const AddTask = (props) => {

    const [input, setInput] = useState("");

    const buttonClick = (e) => {
        e.preventDefault();
        props.setList(oldArr => [...oldArr, input])
        setInput("");
    }


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter new task" onChange={e => setInput(e.target.value)} value={input} />
            </Form.Group>
            <div className="mb-2">
                <Button style={{border:"1px solid black", marginLeft:"30%"}} variant="secondary" size="lg" onClick={buttonClick} type="submit" >
                    Add Task
                </Button>
            </div>
        </Form>
    )
}

export default AddTask