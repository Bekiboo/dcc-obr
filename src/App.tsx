import { useState } from 'react'
import './App.css'
import DicePanel from './components/DicePanel'
import PlayersPanel from './components/PlayersPanel'
import Tray from './components/Tray'
import DiceRollSound from './components/DiceRollSound'

export type DieType = 'D3' | 'D4' | 'D6'

function App() {
  const [rolledDice, setRolledDice] = useState<
    { type: string; result: number }[]
  >([])
  const [playDiceRoll, setPlayDiceRoll] = useState<(() => void) | null>(null)

  const rollDice = (dice: number[]) => {
    setRolledDice([])

    setTimeout(() => {
      const newDice = dice.map((sides) => ({
        type: `D${sides}` as DieType,
        result: Math.ceil(Math.random() * sides),
      }))
      setRolledDice([...newDice])
      // Ensure the dice are rolled after the previous ones are cleared
    }, 50)

    Array.from({ length: dice.length }).forEach(() => playDiceRoll?.())
  }

  return (
    <main className="h-screen grid grid-cols-[8rem,1fr] grid-rows-[1fr,12rem]">
      <PlayersPanel className="col-start-1" />
      <Tray className="col-start-2" rolledDice={rolledDice} />
      <DicePanel className="col-span-2 col-start-1" rollDice={rollDice} />
      <DiceRollSound setPlayDiceRoll={setPlayDiceRoll} />
    </main>
  )
}

export default App
