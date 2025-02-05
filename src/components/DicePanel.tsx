import { cn } from '../lib/utils'
import D3 from './dice/D3'
import D4 from './dice/D4'
import D6 from './dice/D6'

const DicePanel = ({
  className,
  rollDie,
}: {
  className?: string
  rollDie: (type: string, sides: number) => void
}) => {
  const dice = [
    { type: 'D3', sides: 3, Component: D3 },
    { type: 'D4', sides: 4, Component: D4 },
    { type: 'D6', sides: 6, Component: D6 },
  ]

  return (
    <div className={cn('p-4', className)}>
      <h2 className="text-xl font-semibold">DicePanel</h2>
      <div className="flex gap-2">
        {dice.map(({ type, sides, Component }) => (
          <div key={type} className="flex items-center justify-between">
            <button
              className="flex items-center w-16 h-16 gap-2"
              onClick={() => rollDie(type, sides)}
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
