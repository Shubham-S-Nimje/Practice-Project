import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

const Form1 = (props) => {
    const [show, setShow] = useState(false);
    const [error, seterror] = useState('');
    const college = useRef();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const name=e.target.username.value;
        // const age = e.target.age.value;
        const enteredcol = college.current.value

        if(name.length===0 || name.length===0 || enteredcol.length===0)
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
        console.log(enteredcol);
        props.adduser(name,age,enteredcol);
        setUsername('')
        setUserage('')
        college.current.value = '';
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

    const [valid, setValid] = useState(true);
    const onUsercolAddedHandler = () => {
        if(college.current.value.length>2){
          setValid(false)
        }
        else{
          setValid(true)
        }
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
    <div className="container d-grid gap-3 p-2 m-2">
      <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="username" onChange={onUsernameAddedHandler}>
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="age" onChange={onUserageAddedHandler}>
        <Form.Label>Age(in Years):</Form.Label>
        <Form.Control type="number" value={age}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="colname" onChange={onUsercolAddedHandler}>
        <Form.Label>college:</Form.Label>
        <Form.Control type="text" ref={college}/>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={valid ? true : false}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Form1;
