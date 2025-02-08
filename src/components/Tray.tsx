import * as motion from 'motion/react-client'
import { DieType } from '../App'
import Die from './dice/Die'

interface TrayProps {
  className?: string
  rolledDice: { id: string; type: DieType; result: number }[]
}

const Tray = ({ className, rolledDice }: TrayProps) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold">Tray</h2>
      <div className="flex flex-wrap w-screen gap-2 p-2 border border-gray-300 rounded">
        {rolledDice.map((die, index) => {
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
              <Die
                key={die.id}
                result={die.result}
                color={200}
                type={die.type}
                size={16}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Tray
