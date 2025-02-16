import * as motion from 'motion/react-client'
import Die from './dice/Die'

interface TrayProps {
  className?: string
  rolledDice: Record<string, { id: string; type: string; result: number }[]>
}

const Tray = ({ className, rolledDice }: TrayProps) => {
  return (
    <div className={`${className} flex flex-col w-screen h-16 gap-2 p-2`}>
      {Object.entries(rolledDice).map(([player, dice]) => {
        // Ensure dice is an array
        const diceArray = Array.isArray(dice) ? dice : []

        return (
          <div key={player} className="p-2">
            <h3 className="text-lg font-bold">{player}</h3>
            <div className="flex items-center gap-2">
              {diceArray.map((die) => (
                <motion.div
                  key={die.id}
                  initial={{ opacity: 0, y: -20, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 360 * Math.ceil(Math.random() * 4 + 1),
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: Math.random() * 100 + 50,
                    damping: Math.random() * 5 + 15,
                  }}
                  className="max-w-16"
                >
                  <Die
                    result={die.result}
                    color={200}
                    type={die.type}
                    size={'full'}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Tray
