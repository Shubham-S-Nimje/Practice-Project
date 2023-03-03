import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

const Form1 = (props) => {
    const [show, setShow] = useState(false);
    const [error, seterror] = useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const name=e.target.username.value;
        // const age = e.target.age.value;
        if(name.length===0 || name.length===0)
        {
            console.log('error')
            setShow(true)
            seterror('name or age shoud not be empty')
        }
        else if(age<1)
        {
            console.log('error')
            setShow(true)
            seterror('age shoud not be negative')
        }
        else{
        console.log(name);
        console.log(age);
        props.adduser(name,age);
        setUsername('')
        setUserage('')
        setShow(false)
        }
    }
    const [name, setUsername] = useState('')
    const onUsernameAddedHandler = (e) => {
        setUsername(e.target.value)
    }

    const [age, setUserage] = useState('')
    const onUserageAddedHandler = (e) => {
        setUserage(e.target.value)
    }
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Please check your {error}.
          </p>
        </Alert>
      );
    }
  return (
    <div className="container py-10">
      
      <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="username" onChange={onUsernameAddedHandler}>
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="age" onChange={onUserageAddedHandler}>
        <Form.Label>Age(in Years):</Form.Label>
        <Form.Control type="number" value={age}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Form1;
