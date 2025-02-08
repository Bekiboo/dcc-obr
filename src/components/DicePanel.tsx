import { useState } from 'react'
import { cn } from '../lib/utils'
import D3 from './dice/D3'
import D4 from './dice/D4'
import D6 from './dice/D6'
import { Button } from './ui/button'

const DicePanel = ({
  className,
  rollDice,
}: {
  className?: string
  rollDice: ([side]: number[]) => void
}) => {
  const dice = [
    { type: 'D3', sides: 3, Component: D3 },
    { type: 'D4', sides: 4, Component: D4 },
    { type: 'D6', sides: 6, Component: D6 },
  ]
  const [selectedDice, setSelectedDice] = useState<{ [key: string]: number }>(
    {}
  )

  const selectDie = (type: string) => {
    setSelectedDice((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }))
  }

  const handleDoubleClick = (type: string, sides: number) => {
    // if (dice.some((die) => die.selected > 0 && die.type !== type)) {
    return
    // }
    // rollDice([sides])
    // uneselect all dice
    // setDice((prev) => prev.map((die) => ({ ...die, selected: 0 })))
  }

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
        {dice.map(({ type, sides, Component }) => (
          <div key={type} className="flex items-center w-16 h-16 gap-2">
            <button
              onClick={() => selectDie(type)}
              onDoubleClick={() => handleDoubleClick(type, sides)}
            >
              <Component result={sides} color={45} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DicePanel
