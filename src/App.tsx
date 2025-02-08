import { useState } from 'react'
import './App.css'
import DicePanel from './components/DicePanel'
// import PlayersPanel from './components/PlayersPanel'
import Tray from './components/Tray'
import DiceRollSound from './components/DiceRollSound'
import OBR from '@owlbear-rodeo/sdk'

export type DieType =
  | 'D3'
  | 'D4'
  | 'D5'
  | 'D6'
  | 'D7'
  | 'D8'
  | 'D10'
  | 'D12'
  | 'D14'
  | 'D16'
  | 'D20'
  | 'D24'
  | 'D30'
  | 'D100'
console.log(OBR.room.id)

function App() {
  const [rolledDice, setRolledDice] = useState<
    { id: string; type: DieType; result: number }[]
  >([])

  const [playDiceRoll, setPlayDiceRoll] = useState<(() => void) | null>(null)

  const rollDice = (dice: number[]) => {
    setRolledDice([])

    setTimeout(() => {
      const newDice = dice.map((sides) => ({
        id: Math.random().toString(36).substring(7),
        type: `D${sides}` as DieType,
        result: Math.ceil(Math.random() * sides),
      }))
      setRolledDice([...newDice])
      // Ensure the dice are rolled after the previous ones are cleared
    }, 50)

    Array.from({ length: dice.length }).forEach(() => playDiceRoll?.())
  }

  return (
    <main className="h-screen grid grid-cols-[20%,80%] grid-rows-[1fr,12rem] bg-stone-800 overflow-hidden text-white">
      {/* <PlayersPanel className="col-start-1" /> */}
      <Tray className="w-full col-start-2" rolledDice={rolledDice} />
      <DicePanel className="col-span-2 col-start-1" rollDice={rollDice} />
      <DiceRollSound setPlayDiceRoll={setPlayDiceRoll} />
    </main>
  )
}

export default App
