import { useState } from 'react'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {setClicks(clicks + 1) }

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <div className="image">
        <img className ="image" src="samosa.png"/>
      </div>
      <div className="Clicker">
        <p>{clicks}</p>
        <button onClick={handleClick}>Click ME </button>
      </div>


    </div>
  );
}

export default App
