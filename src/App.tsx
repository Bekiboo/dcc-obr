import { useState } from 'react'
import './App.css'
import DicePanel from './components/DicePanel'
import PlayersPanel from './components/PlayersPanel'
import Tray from './components/Tray'

function App() {
  const [rolledDice, setRolledDice] = useState<
    { type: string; result: number }[]
  >([])

  const rollDie = (type: string, sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1
    setRolledDice((prev) => [...prev, { type, result }])
    // broadcast roll
  }

  return (
    <main className="h-screen grid grid-cols-[8rem,1fr] grid-rows-[1fr,12rem]">
      <PlayersPanel className="col-start-1" />
      <Tray className="col-start-2" rolledDice={rolledDice} />
      <DicePanel className="col-span-2 col-start-1" rollDie={rollDie} />
    </main>
  )
}

export default App
