import { useEffect, useState } from 'react'
import './App.css'
import OBR, { Player } from '@owlbear-rodeo/sdk'
import DicePanel from './components/DicePanel'
import PlayerCard from './components/PlayerCard'
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
        console.log(dice)
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
    <main className="h-screen grid grid-rows-[1fr,6rem] bg-stone-800 overflow-hidden text-white">
      <div className="flex flex-col w-full gap-2 p-4">
        {playerName && playerColor && (
          <PlayerCard
            name={`${playerName}`}
            color={playerColor}
            isPlayer={true}
            rollDice={rollDice}
          />
        )}

        {party.map((player) => (
          <PlayerCard key={player.id} name={player.name} color={player.color} />
        ))}
      </div>

      <DicePanel className="w-screen col-start-1" rollDice={rollDice} />

      <DiceRollSound setPlayDiceRoll={setPlayDiceRoll} />
    </main>
  )
}

export default App
