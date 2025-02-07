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
  const [dice, setDice] = useState([
    { type: 'D3', sides: 3, Component: D3, selected: 0 },
    { type: 'D4', sides: 4, Component: D4, selected: 0 },
    { type: 'D6', sides: 6, Component: D6, selected: 0 },
  ])

  const selectDie = (type: string) => {
    // multiple selection, unselect if already selected
    setDice((prev) =>
      prev.map((die) =>
        die.type === type ? { ...die, selected: die.selected + 1 } : die
      )
    )
  }

  const handleDoubleClick = (type: string, sides: number) => {
    if (
      dice.some(
        (die) => (die.selected > 0 && die.type !== type) || die.selected === 0
      )
    ) {
      return
    }
    rollDice([sides])
    // uneselect all dice
    setDice((prev) => prev.map((die) => ({ ...die, selected: 0 })))
  }

  const rollAllDice = () => {
    const selectedDice = dice.filter(({ selected }) => selected)
    rollDice(selectedDice.map(({ sides }) => sides))
    setDice((prev) => prev.map((die) => ({ ...die, selected: 0 })))
  }

  return (
    <div className={cn('p-4', className)}>
      <h2 className="text-xl font-semibold">DicePanel</h2>
      <p>Current selection</p>
      <ul className="flex h-10">
        {dice.map((die) =>
          die.selected > 0
            ? Array.from({ length: die.selected }).map((_, index) => (
                <li
                  key={`${die.type}-${index}`}
                  className="flex items-center gap-2"
                >
                  <die.Component result={die.sides} color={0} />
                </li>
              ))
            : null
        )}
      </ul>
      <Button
        disabled={dice.every(({ selected }) => selected === 0)}
        onClick={() => rollAllDice()}
      >
        Roll Dice
      </Button>
      <div className="flex gap-2">
        {dice.map(({ type, sides, Component }) => (
          <div key={type} className="flex items-center w-16 h-16 gap-2">
            <button
              onClick={() => selectDie(type)}
              onDoubleClick={() => handleDoubleClick(type, sides)}
            >
              <Component result={sides} color={0} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DicePanel
