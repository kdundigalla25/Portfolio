import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="navbar">
        <p>Karthik Dundigalla</p>
        <button>Home</button>
        <button>Skills</button>
         <button>Projects</button>
         <button>Contact</button>
       </div>
    </div>
  );
}

export default App
