import { useState } from 'react'
import { cn } from '../lib/utils'

import { Button } from './ui/button'
import Die from './dice/Die'

const DicePanel = ({
  className,
  rollDice,
}: {
  className?: string
  rollDice: ([side]: number[]) => void
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

  const selectDie = (type: string) => {
    setSelectedDice((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }))
  }

  const uneselectDie = (type: string) => {
    setSelectedDice((prev) => ({ ...prev, [type]: (prev[type] || 0) - 1 }))
  }

  const rollAllDice = () => {
    rollDice(
      Object.entries(selectedDice).reduce<number[]>((acc, [type, count]) => {
        return [
          ...acc,
          ...Array.from({ length: count }).map(
            () => dice.find((die) => die.type === type)?.sides || 0
          ),
        ]
      }, [])
    )
    setSelectedDice({})
  }

  const rollOneDie = (type: string) => {
    rollDice([dice.find((die) => die.type === type)?.sides || 0])
  }

  // start timer one mouse down, clear timer on mouse up
  // if timer is cleared before mouse up, roll dice
  let timer: ReturnType<typeof setTimeout>
  const handleMouseDown = (type: string) => {
    timer = setTimeout(() => rollOneDie(type), 250)
  }
  const handleMouseUp = (type: string) => {
    if (timer != undefined) {
      selectDie(type)
    }
    clearTimeout(timer)
  }

  return (
    <div className={cn('', className)}>
      <div className="flex gap-5">
        <Button
          disabled={Object.values(selectedDice).every((value) => value === 0)}
          onClick={() => rollAllDice()}
          className="dark"
        >
          Roll
        </Button>
      </div>

      <div className="flex flex-wrap gap-1">
        {dice.map(({ type, sides }) => (
          <div className="relative">
            <button
              key={type}
              // onClick={() => selectDie(type)}
              onMouseDown={() => handleMouseDown(type)}
              onMouseUp={() => handleMouseUp(type)}
              // onDoubleClick={() => handleDoubleClick(type, sides)}
            >
              <Die result={sides} color={45} type={type} size={'3.25rem'} />
            </button>
            {selectedDice[type] > 0 && (
              <button
                className="absolute top-0 right-0 w-6 h-6 font-bold text-white bg-red-500 rounded-full"
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
