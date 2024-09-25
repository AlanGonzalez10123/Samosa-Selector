import { useState } from 'react'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0)
  const [multiplier, setMultiplier] =  useState(1)

  const handleClick = () => { setClicks(clicks + multiplier) }

  const handleMultiplier = (multiplier) => { setMultiplier(multiplier) }

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <div className="image">
        <img onClick={handleClick} className ="image" src="samosa.png"/>
      </div>
      <div className="Clicker">
        <p>{clicks}</p>
      </div>

      <div className="Multipliers">
        <div className="two">
          <h3>Double Stuffed</h3>
          <h5>2x Multiplier</h5>
          <button onClick={() => handleMultiplier(2)} >10 samosas</button>
        </div>

        <div className="five">
          <h3>Party Pack</h3>
          <h5>5x Multiplier</h5>
          <button onClick={() => handleMultiplier(5)}>100 samosas</button>
        </div>

        <div className="ten">
          <h3>Full Feast</h3>
          <h5>10x Multiplier</h5>
          <button onClick={() => handleMultiplier(10)} >1000 samosas</button>
        </div>
      </div>


    </div>
  );
}

export default App
