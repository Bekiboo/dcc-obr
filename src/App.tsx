import { useEffect, useState } from 'react'
import './App.css'
import DicePanel from './components/DicePanel'
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

function App() {
  const [rolledDice, setRolledDice] = useState<
    Record<string, { id: string; type: string; result: number }[]>
  >({})

  const [ready, setReady] = useState(false)
  useEffect(() => {
    OBR.onReady(() => setReady(true))
  }, [])

  const [sceneReady, setSceneReady] = useState(false)
  const [playerName, setPlayerName] = useState<string | null>(null)
  useEffect(() => {
    if (ready) {
      OBR.player.getName().then(setPlayerName)
      return OBR.scene.onReadyChange(setSceneReady)
    }
  }, [ready])

  const [playDiceRoll, setPlayDiceRoll] = useState<(() => void) | null>(null)

  const rollDice = (dice: number[]) => {
    const newDice = dice.map((sides) => ({
      id: Math.random().toString(36).substring(7),
      type: `D${sides}` as DieType,
      result: Math.ceil(Math.random() * sides),
    }))

    OBR.broadcast.sendMessage(
      'funky_dice_roller',
      {
        player: playerName,
        dice: newDice,
      },
      { destination: 'ALL' }
    )
  }

  useEffect(() => {
    if (sceneReady) {
      OBR.broadcast.onMessage(
        'funky_dice_roller',
        ({ data }: { data: any }) => {
          setRolledDice((prev) => ({
            ...prev,
            [data.player]: data.dice, // Directly replace the player's rolls
          }))

          // Play dice sound effect
          playDiceRoll?.()
        }
      )
    }
  }, [sceneReady, playDiceRoll])

  return (
    <main className="h-screen grid grid-cols-[20%,80%] grid-rows-[1fr,6rem] bg-stone-800 overflow-hidden text-white">
      <Tray className="w-full col-start-1" rolledDice={rolledDice} />
      <DicePanel
        className="w-screen col-span-2 col-start-1"
        rollDice={rollDice}
      />
      <DiceRollSound setPlayDiceRoll={setPlayDiceRoll} />
    </main>
  )
}

export default App
