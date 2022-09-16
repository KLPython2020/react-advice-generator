import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [slips, setSlip] = useState([])
  const [Clicked, setClicked] = useState(false)
  const handleClick = ()=>{
    setClicked(!Clicked)
  }
  useEffect(() => {
      axios.get('https://api.adviceslip.com/advice')
      .then(res => {
          console.log(res)
          setSlip(res.data.slip)
      })
      .catch(err => {
          console.log(err)
      })
  },[Clicked])
  return (
    <main>
      <div className="container">
        <div>
          <div className="quote-number">Advice #{slips.id}</div>
          <div className="quote">{slips.advice}</div>
        </div>
        <div className="quote-footer">
          <img src="./images/pattern-divider-mobile.svg" alt="Advice pattern divider mobile"/>
        </div>
        <div className="button-container">
            <div className="button" aria-label="dice" onClick={handleClick}>
            <img 
                alt="dice - click to generate an advice" 
                aria-label="dice" 
                src="./images/icon-dice.svg"/>
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
