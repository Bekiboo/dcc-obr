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
    // { type: 'D8', sides: 8 },
    // { type: 'D10', sides: 10 },
    // { type: 'D12', sides: 12 },
    // { type: 'D14', sides: 14 },
    // { type: 'D16', sides: 16 },
    // { type: 'D20', sides: 20 },
    // { type: 'D24', sides: 24 },
    // { type: 'D30', sides: 30 },
    // { type: 'D100', sides: 100 },
  ]
  const [selectedDice, setSelectedDice] = useState<{ [key: string]: number }>(
    {}
  )

  const selectDie = (type: string) => {
    setSelectedDice((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }))
  }

  // const handleDoubleClick = (type: string, sides: number) => {
  //   // if (dice.some((die) => die.selected > 0 && die.type !== type)) {
  //   return
  //   // }
  //   // rollDice([sides])
  //   // uneselect all dice
  //   // setDice((prev) => prev.map((die) => ({ ...die, selected: 0 })))
  // }

  const rollAllDice = () => {
    rollDice(
      Object.keys(selectedDice).map(
        (type) => dice.find((die) => die.type === type)!.sides
      )
    )
    setSelectedDice({})
  }

  return (
    <div className={cn('p-4', className)}>
      <div className="flex gap-5">
        <Button
          disabled={Object.values(selectedDice).every((value) => value === 0)}
          onClick={() => rollAllDice()}
          className="dark"
        >
          Roll
        </Button>
        {/* <ul className="flex h-10">
          {dice.map(({ type, sides, Component }) =>
            selected > 0
              ? Array.from({ length: selected }).map((_, index) => (
                  <li
                    key={`${type}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <Component result={sides} color={300} />
                  </li>
                ))
              : null
          )}
        </ul> */}
      </div>

      <div className="flex gap-2">
        {dice.map(({ type, sides }) => (
          <div key={type} className="flex items-center w-16 h-16 gap-2">
            <button
              onClick={() => selectDie(type)}
              // onDoubleClick={() => handleDoubleClick(type, sides)}
            >
              <Die result={sides} color={45} type={type} size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DicePanel
