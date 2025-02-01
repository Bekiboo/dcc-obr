import { useState } from 'react'
import './App.css'
import D3 from './components/dice/D3'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <D3 result={count % 3} color={'35'} />
    </>
  )
}

export default App
