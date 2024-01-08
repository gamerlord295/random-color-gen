/* eslint-disable no-unused-vars */
import './App.css'

import Color from './Color';
import { useState } from 'react'

function App() {
  const [bg, setBg] = useState('#000000');
  const [css, setCss] = useState();
  const [colors, setColors] = useState([])

  const gen = () => {
    const newColor = bg
    setColors(prev => [...prev, newColor])
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBg(randomColor);
  }
  
  const copyConent = async () => {
    await navigator.clipboard.writeText(bg)
  }

  function rotate(e) {
    const rec = document.querySelector('.rec')
    const force = 7;
    const offsetY = -(e.nativeEvent.offsetY - rec.offsetHeight/2)/force;
    const offsetX = (e.nativeEvent.offsetX - rec.offsetWidth/2)/force;
    setCss('rotateX(' + offsetY + 'deg) rotateY(' + offsetX + 'deg)')
  }

  return (
    <>
      <p>click to copy</p>
      <div style={{background: bg,transform: css}} className='rec' onMouseMove={(e) => rotate(e)} onClick={copyConent}>
        <h1>
          {bg}
        </h1>
      </div>
      <button onClick={gen} className='btn'>Generate</button>
      <div className='colors'>
      {colors.map((color) => (
        <Color key={color} color={color} />
      ))}
      </div>
    </>
  )
}

export default App
