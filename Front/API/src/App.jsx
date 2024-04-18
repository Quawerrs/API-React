import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Formulaire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Mon Application</h1>
      <Formulaire />
    </div>
    </>
  )
}

export default App
