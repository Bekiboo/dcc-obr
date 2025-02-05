import { useState } from 'react'
import { Slider } from '../ui/slider'

interface GradientTesterProps {
  x1: number
  y1: number
  x2: number
  y2: number
  onChange: (values: { x1: number; y1: number; x2: number; y2: number }) => void
}

const LinearGradientTester = ({
  x1,
  y1,
  x2,
  y2,
  onChange,
}: GradientTesterProps) => {
  const [values, setValues] = useState({ x1, y1, x2, y2 })

  const updateValue = (key: keyof typeof values, value: number) => {
    const newValues = { ...values, [key]: value }
    setValues(newValues)
    onChange(newValues) // Notify parent of changes
  }

  return (
    <div className="my-8 w-80 ml-4 flex flex-col gap-4">
      {(['x1', 'y1', 'x2', 'y2'] as const).map((key) => (
        <div key={key} className="flex gap-4">
          <Slider
            defaultValue={[values[key]]}
            min={-200}
            max={200}
            step={0.1}
            onValueChange={(val) => updateValue(key, val[0])}
          />
          <div className="flex gap-4">
            <span>{key}:</span> {values[key]}
          </div>
        </div>
      ))}
    </div>
  )
}

export default LinearGradientTester
