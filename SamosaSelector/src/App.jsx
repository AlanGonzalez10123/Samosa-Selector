import { useState } from 'react'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0)
  const [multiplier, setMultiplier] =  useState(1)

  const handleClick = () => {setClicks(clicks + 1) }

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <div className="image">
        <img onClick={handleClick} className ="image" src="samosa.png"/>
      </div>
      <div className="Clicker">
        <p>{clicks}</p>
      </div>


    </div>
  );
}

export default App
