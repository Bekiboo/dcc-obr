import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

import { Button } from './ui/button'
import Die from './dice/Die'
import { Slider } from './ui/slider'
import IconSpeaker from './IconSpeaker'

const DicePanel = ({
  className,
  rollDice,
  setVolume,
}: {
  className?: string
  rollDice: ([side]: number[]) => void
  setVolume: (volume: number) => void
}) => {
  const dice = [
    { type: 'D3', sides: 3 },
    { type: 'D4', sides: 4 },
    { type: 'D5', sides: 5 },
    { type: 'D6', sides: 6 },
    { type: 'D7', sides: 7 },
    { type: 'D8', sides: 8 },
    { type: 'D10', sides: 10 },
    { type: 'D12', sides: 12 },
    { type: 'D14', sides: 14 },
    { type: 'D16', sides: 16 },
    { type: 'D20', sides: 20 },
    { type: 'D24', sides: 24 },
    { type: 'D30', sides: 30 },
    { type: 'D100', sides: 100 },
  ]
  const [selectedDice, setSelectedDice] = useState<{ [key: string]: number }>(
    {}
  )
  const [lastRoll, setLastRoll] = useState<number[]>([])
  const [rerollable, setRerollable] = useState(false)

  const selectDie = (type: string) => {
    const totalSelected = Object.values(selectedDice).reduce(
      (acc, count) => acc + count,
      0
    )

    if (totalSelected >= 16) return

    setSelectedDice((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }))
  }

  const uneselectDie = (type: string) => {
    setSelectedDice((prev) => ({ ...prev, [type]: (prev[type] || 0) - 1 }))
  }

  const rollAllDice = () => {
    const rolledDice = Object.entries(selectedDice).reduce<number[]>(
      (acc, [type, count]) => {
        return [
          ...acc,
          ...Array.from({ length: count }).map(
            () => dice.find((die) => die.type === type)?.sides || 0
          ),
        ]
      },
      []
    )
    rollDice(rolledDice)
    setSelectedDice({})
    // setRerollable(true)
    setLastRoll(rolledDice)
  }

  const rollOneDie = (type: string) => {
    const rolledDie = [dice.find((die) => die.type === type)?.sides || 0]
    rollDice(rolledDie)
    // setRerollable(true)
    setLastRoll(rolledDie)
  }

  // start timer one mouse down, clear timer on mouse up
  // if timer is cleared before mouse up, roll dice
  let timer: ReturnType<typeof setTimeout> | null = null
  let hasRolled = false

  const handleMouseDown = (type: string) => {
    hasRolled = false
    timer = setTimeout(() => {
      rollOneDie(type)
      hasRolled = true
      timer = null
    }, 500)
  }

  const handleMouseUp = (type: string) => {
    if (!hasRolled && timer) {
      selectDie(type) // Only select if long press wasn't completed
      // setRerollable(false)
    }
    clearTimeout(timer!)
    timer = null
  }

  const rerollDice = () => {
    if (rollDice) {
      rollDice(lastRoll)
    }
  }

  // Update rerollable state
  useEffect(() => {
    setRerollable(
      lastRoll.length > 0 &&
        Object.values(selectedDice).every((value) => value === 0)
    )
  }, [selectedDice, lastRoll])

  return (
    <div className={cn('flex gap-1 px-1', className)}>
      <div className="flex flex-col gap-2 w-7">
        <Button
          disabled={
            Object.values(selectedDice).every((value) => value === 0) &&
            !rerollable
          }
          onClick={() => (rerollable ? rerollDice() : rollAllDice())}
          className={
            'w-2 h-full px-3 bg-stone-700 outline hover:bg-stone-600 active:bg-stone-500' +
            (rerollable ? ' outline-stone-400' : ' outline-stone-200')
          }
        >
          <span className="-rotate-90">{rerollable ? 'Reroll' : 'Roll'}</span>
        </Button>
        <div className="relative w-full h-8 mb-2 group">
          <div className="absolute">
            <IconSpeaker />
          </div>

          <Slider
            min={0}
            max={0.5}
            step={0.01}
            defaultValue={[0.1]}
            onValueChange={(e) => setVolume(e[0])}
            className="z-10 hidden w-32 h-4 rounded-full outline outline-white group-hover:block bg-stone-950"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-end gap-1">
        {dice.map(({ type, sides }, index) => (
          <div key={index} className="relative">
            <button
              className="relative"
              onMouseDown={() => handleMouseDown(type)}
              onMouseUp={() => handleMouseUp(type)}
            >
              <div className="absolute w-full h-full " />
              <Die result={sides} hex={'#19130f'} type={type} size={'3rem'} />
            </button>
            {selectedDice[type] > 0 && (
              <button
                className="absolute w-6 h-6 font-bold text-white bg-red-500 rounded-full -top-1.5 -right-1.5"
                onClick={() => uneselectDie(type)}
              >
                {selectedDice[type]}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DicePanel
