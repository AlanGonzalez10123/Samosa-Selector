import { useState } from 'react'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0)
  const [multiplier, setMultiplier] =  useState(1)
  const [twoFlag, setTwoFlag] = useState(true)
  const [fiveFlag, setFiveFlag] = useState(true)
  const [tenFlag, setTenFlag] = useState(true)

  const handleClick = () => { setClicks(clicks + multiplier) }

  

  function doubler(){
    if (clicks >= 10)
    {
      setClicks(clicks - 10)
      setMultiplier(2)
      setTwoFlag(false)
    }

  }

  function fiveX(){
    if (clicks >= 100)
    {
      setClicks(clicks - 100)
      setMultiplier(5)
      setFiveFlag(false)
    }

  }

  function tenX(){
    if (clicks >= 1000)
    {
      setClicks(clicks - 1000)
      setMultiplier(10)
      setTenFlag(false)
    }

  }


  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <div className="image">
        <img onClick={handleClick} className ="image" src="samosa.png"/>
      </div>
      <div className="Clicker">
        <p>Clicks: {clicks}</p>
      </div>

      <div className="Multipliers">
        <div className="two">
          <h3>Double Stuffed</h3>
          <h5>2x Multiplier</h5>
          {twoFlag && <button onClick={doubler}>10 samosas</button>}
        </div>

        <div className="five">
          <h3>Party Pack</h3>
          <h5>5x Multiplier</h5>
          {fiveFlag && <button onClick={fiveX}>100 samosas</button>}
        </div>

        <div className="ten">
          <h3>Full Feast</h3>
          <h5>10x Multiplier</h5>
          {tenFlag && <button onClick={tenX}>1000 samosas</button>}
        </div>
      </div>


    </div>
  );
}

export default App
