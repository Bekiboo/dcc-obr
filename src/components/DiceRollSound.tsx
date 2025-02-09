import { useCallback, useEffect, useRef, useState } from 'react'
import { Slider } from './ui/slider'

const DiceRollSound = ({
  setPlayDiceRoll,
}: {
  setPlayDiceRoll: (fn: () => void) => void
}) => {
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const [volume, setVolume] = useState(0.25)

  // Initialize the audio context and gain node
  useEffect(() => {
    if (!audioContextRef.current) {
      const context = new AudioContext()
      const gain = context.createGain()
      gain.connect(context.destination)
      audioContextRef.current = context
      gainNodeRef.current = gain
    }
  }, [])

  const playDiceRoll = useCallback(async () => {
    if (!audioContextRef.current || !gainNodeRef.current) return

    const response = await fetch('/dieRolls.webm')
    const arrayBuffer = await response.arrayBuffer()
    const audioBuffer = await audioContextRef.current.decodeAudioData(
      arrayBuffer
    )

    const source = audioContextRef.current.createBufferSource()
    source.buffer = audioBuffer
    source.connect(gainNodeRef.current)

    const segments = [
      [0, 1],
      [1, 2.1],
      [2.1, 3.2],
      [3.2, 4.4],
      [4.4, 5.6],
      [5.9, 7],
      [7.1, 8.1],
      [8.1, 9],
      [9, 10.1],
      [10.1, 11.1],
      [11.1, 12.1],
      [12.1, 13],
      [13, 14],
      [14, 15.1],
      [15.1, 16.2],
      [16.2, 17.2],
      [17.2, 18.6],
      [18.6, 19.7],
      [19.7, 20.9],
      [20.9, 22.1],
      [22.1, 23.2],
      [23.2, 24.2],
      [24.2, 25.4],
      [25.5, 26.6],
      [26.6, 27.8],
      [27.8, 29],
      [29, 30.2],
      [30.2, 31.3],
      [31.3, 32.3],
      [32.3, 33.2],
    ]

    const segment = segments[Math.floor(Math.random() * segments.length)]
    const segmentDuration = segment[1] - segment[0]
    source.playbackRate.value = 0.8
    source.start(0, segment[0], segmentDuration)
  }, [])

  // Bind the playDiceRoll function to the setPlayDiceRoll function
  useEffect(() => {
    setPlayDiceRoll(() => playDiceRoll)
  }, [playDiceRoll, setPlayDiceRoll])

  //   Update the volume of the gain node when the volume state changes
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume
    }
  }, [volume])

  return (
    <div>
      <Slider
        min={0}
        max={1}
        step={0.1}
        defaultValue={[volume]}
        onValueChange={(e) => setVolume(e[0])}
        className="w-32 h-4"
      />
      {/* <span>Volume: {Math.round(volume * 100)}%</span> */}
    </div>
  )
}

export default DiceRollSound
