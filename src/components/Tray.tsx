import * as motion from 'motion/react-client'
import D3 from './dice/D3'
import D4 from './dice/D4'
import D6 from './dice/D6'
import { DieType } from '../App'

// Create a mapping from DieType to their corresponding components
const diceComponents: Record<
  DieType,
  React.FC<{ result: number; color: number }>
> = {
  D3,
  D4,
  D6,
}

interface TrayProps {
  className?: string
  rolledDice: { type: DieType; result: number }[]
}

const Tray = ({ className, rolledDice }: TrayProps) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold">Tray</h2>
      <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded">
        {rolledDice.map((die, index) => {
          const DieComponent = diceComponents[die.type]
          return (
            <motion.div
              key={index}
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
              className="w-16 h-16"
            >
              <DieComponent result={die.result} color={0} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Tray
