import './App.css';
import Form1 from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showinputs from './components/Showinputs';
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([])

  const adduser = (newname, newage, newcol) => {
    setUsers((newaddeduser) => {
      return [...newaddeduser, {name:newname, age:newage, enteredcol:newcol, key:Math.random().toString()}];
    });
  }
  return (
    <div className="container">
      <Form1 adduser={adduser}/>
      <Showinputs users={users}/>
    </div>
  );
}

export default App;
