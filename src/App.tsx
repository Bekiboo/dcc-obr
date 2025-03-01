import { useEffect, useState } from 'react'
import './App.css'
import OBR, { Player } from '@owlbear-rodeo/sdk'
import DicePanel from './components/DicePanel'
import PlayerTray from './components/PlayerTray'
import DiceRollSound from './components/DiceRollSound'

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

type SimplifiedPlayer = {
  id: string
  name: string
  color: string
}

const simplifyParty = (party: Player[]): SimplifiedPlayer[] =>
  party.map(({ id, name, color }) => ({ id, name, color }))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deepEqual = (a: any, b: any): boolean => {
  if (a === b) return true
  if (typeof a !== 'object' || a === null || b === null) return false
  if (Array.isArray(a) !== Array.isArray(b)) return false

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) return false

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }

  return true
}

function App() {
  const [ready, setReady] = useState(false)
  // const [sceneReady, setSceneReady] = useState(false)
  const [playerName, setPlayerName] = useState<string | null>(null)
  const [playerColor, setPlayerColor] = useState<string | null>(null)
  const [party, setParty] = useState<Player[]>([])
  const [playDiceRoll, setPlayDiceRoll] = useState<(() => void) | null>(null)
  const [volume, setVolume] = useState(0.15)

  // Initialize Owlbear Rodeo SDK
  useEffect(() => {
    OBR.onReady(() => setReady(true))
  }, [])

  // Fetch player and party details
  useEffect(() => {
    console.log(ready)
    if (ready) {
      OBR.player.getName().then(setPlayerName)
      OBR.player.getColor().then(setPlayerColor)

      OBR.player.onChange((player) => {
        setPlayerName(player.name)
        setPlayerColor(player.color)
      })

      OBR.party.getPlayers().then(setParty)
      OBR.party.onChange((newParty) => {
        const simplifiedNewParty = simplifyParty(newParty)
        setParty((prevParty) => {
          const simplifiedPrevParty = simplifyParty(prevParty)
          return deepEqual(simplifiedPrevParty, simplifiedNewParty)
            ? prevParty
            : newParty
        })
      })

      // @ts-expect-error - SDK type mismatch
      OBR.broadcast.onMessage('funky_dice_roller', ({ data: { dice } }) => {
        if (playDiceRoll) {
          for (let i = 0; i < dice.length; i++) {
            playDiceRoll()
          }
        }
      })

      // return OBR.scene.onReadyChange(setSceneReady)
    }
  }, [playDiceRoll, ready])

  // Roll Dice and Broadcast
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

  return (
    <main className="h-screen grid grid-rows-[1fr,7rem] bg-stone-800 overflow-hidden text-white">
      <div className="flex flex-col w-full gap-2 p-4 overflow-y-auto no-scrollbar">
        {playerName && playerColor && (
          <PlayerTray name={`${playerName}`} color={playerColor} />
        )}

        {party.map((player) => (
          <PlayerTray key={player.id} name={player.name} color={player.color} />
        ))}
      </div>

      <DicePanel
        className="w-screen"
        rollDice={rollDice}
        setVolume={setVolume}
      />

      <DiceRollSound setPlayDiceRoll={setPlayDiceRoll} volume={volume} />
    </main>
  )
}

export default App
