import React, { useEffect, useState } from 'react'
import OBR from '@owlbear-rodeo/sdk'
import { motion } from 'motion/react'
import Die from './dice/Die'

export type DieRoll = {
  id: string
  type: string
  result: number
}

type PlayerCardProps = {
  name: string
  color: string
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, color }) => {
  const [dice, setDice] = useState<DieRoll[]>([])

  useEffect(() => {
    const handleDiceRoll = ({
      player,
      dice,
    }: {
      player: string
      dice: DieRoll[]
    }) => {
      if (player === name) {
        setDice(dice)
      }
    }

    // @ts-expect-error - SDK is missing types
    OBR.broadcast.onMessage('funky_dice_roller', handleDiceRoll)
  }, [name])

  return (
    <div className="w-full" style={{ borderColor: color }}>
      <h2 className="" style={{ color }}>
        {name}
      </h2>
      <div className="flex items-center gap-2">
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
            className="max-w-16"
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
      {/* <div className="mt-2">
        {dice.length > 0 ? (
          dice.map((die) => (
            <p key={die.id}>
              {die.type}: {die.result}
            </p>
          ))
        ) : (
          <p>No dice rolled yet.</p>
        )}
      </div> */}
    </div>
  )
}

export default PlayerCard
