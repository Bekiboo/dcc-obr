import { FC, useEffect, useState } from 'react'
import OBR from '@owlbear-rodeo/sdk'
import { motion } from 'motion/react'
import Die from './dice/Die'
import { Button } from './ui/button'

export type DieRoll = {
  id: string
  type: string
  result: number
}

type PlayerTrayProps = {
  name: string
  color: string
  isPlayer?: boolean
  rollDice?: ([side]: number[]) => void
}

const PlayerTray: FC<PlayerTrayProps> = ({
  name,
  color,
  isPlayer = false,
  rollDice,
}) => {
  const [dice, setDice] = useState<DieRoll[]>([])

  const rerollDice = () => {
    if (rollDice) {
      rollDice(dice.map((die) => parseInt(die.type.slice(1))))
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDiceRoll = ({ data }: { data: any }) => {
      if (data.player === name) {
        setDice(data.dice)
      }
    }

    OBR.broadcast.onMessage('funky_dice_roller', handleDiceRoll)
  }, [name])

  return (
    <div
      className="flex items-center w-full gap-2"
      style={{ borderColor: color }}
    >
      <div className="flex items-center justify-center w-6 h-16">
        {isPlayer ? (
          <Button
            className="w-16 h-6 text-white -rotate-90 bg-stone-700"
            onClick={() => rerollDice()}
            disabled={dice.length === 0}
          >
            Reroll
          </Button>
        ) : (
          <h2 className="-rotate-90 " style={{ color }}>
            {name.slice(0, 8)}
          </h2>
        )}
      </div>
      <div
        className={
          'flex items-center h-16  w-72' +
          (dice.length > 7 ? ' flex-wrap gap-1' : ' gap-2')
        }
      >
        {dice.map((die) => (
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
            className={'max-w-16' + (dice.length > 7 ? ' w-8' : '')}
          >
            <Die
              result={die.result}
              hex={color}
              type={die.type}
              size={'full'}
            />
          </motion.div>
        ))}
      </div>
      {/* total */}
      <div className="flex items-center justify-center w-16 h-16">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.5 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 360 * Math.ceil(Math.random() * 5),
          }}
          transition={{
            type: 'spring',
            stiffness: Math.random() * 130 + 20,
            damping: Math.random() * 10 + 5,
          }}
          className={'max-w-16' + (dice.length > 7 ? ' w-8' : '')}
        >
          <h2>{dice.reduce((acc, die) => acc + die.result, 0)}</h2>
        </motion.div>
      </div>
    </div>
  )
}

export default PlayerTray
