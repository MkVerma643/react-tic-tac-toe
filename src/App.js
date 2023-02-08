import logo from './logo.svg';
import React, {useState} from 'react';
import Icon from './components/Icon';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';

const itemArray = new Array(9).fill("empty");

function App() {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        
        <Icon/>
        
      </header>
    </div>
  );
}

export default App;
