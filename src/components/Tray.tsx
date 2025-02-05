import D3 from './dice/D3'
import D4 from './dice/D4'
import D6 from './dice/D6'

const diceComponents = {
  D3,
  D4,
  D6,
}

const Tray = ({
  className,
  rolledDice,
}: {
  className?: string
  rolledDice: { type: string; result: number }[]
}) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold">Tray</h2>
      <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded">
        {rolledDice.map((die, index) => {
          const DieComponent =
            diceComponents[die.type as keyof typeof diceComponents]
          return DieComponent ? (
            <div className="w-16 h-16" key={index}>
              <DieComponent key={index} result={die.result} color={250} />
            </div>
          ) : null
        })}
      </div>
    </div>
  )
}

export default Tray
