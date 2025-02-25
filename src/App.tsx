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
    if (ready) {
      OBR.player.getName().then(setPlayerName)
      OBR.player.getColor().then(setPlayerColor)

      OBR.player.onChange((player) => {
        setPlayerName(player.name)
        setPlayerColor(player.color)
      })

      OBR.party.getPlayers().then(setParty)
      OBR.party.onChange(setParty)

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
