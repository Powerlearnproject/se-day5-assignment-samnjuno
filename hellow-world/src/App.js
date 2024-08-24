import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  //javascript logic
  //create a state
  const [message, setmessage] = useState('Hello world');

  const handleclick = () => {
    setmessage('clicked')
  }


  //render jsx(html and css)
  return(
  <div>
      <h1>{message}</h1>
      <button onclick={handleclick}>Press Me</button>
    </div>

  );
}

export default App;
