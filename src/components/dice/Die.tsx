import D3 from './D3'
import D4 from './D4'
import D5 from './D5'
import D6 from './D6'
import D7 from './D7'
import D8 from './D8'
import D10 from './D10'
import D12 from './D12'
import D14 from './D14'
import D16 from './D16'
import D20 from './D20'
import D24 from './D24'
import D30 from './D30'
import D100 from './D100'

// function to extract hue from hex color
const hexToHue = (hex: string) => {
  console.log(hex)
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  if (max === min) {
    // Grayscale case: no hue
    return 0
  }

  let hue = 0

  if (max === r) {
    hue = (g - b) / (max - min)
  } else if (max === g) {
    hue = 2 + (b - r) / (max - min)
  } else {
    hue = 4 + (r - g) / (max - min)
  }

  hue *= 60

  if (hue < 0) {
    hue += 360
  }

  return hue
}

// function to extract saturation from hex color
const hexToSaturation = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  if (max === 0) {
    return 0
  }

  const saturation = 1 - min / max
  return Math.round(saturation * 100)
}

const Die = ({
  type,
  size,
  result,
  hex,
}: {
  type: string
  size: number | string
  result: number
  hex: string
}) => {
  const randId = Math.random().toString(36).substring(7)

  const renderDie = () => {
    switch (type) {
      case 'D3':
        return (
          <D3
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D4':
        return (
          <D4
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D5':
        return (
          <D5
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D6':
        return (
          <D6
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D7':
        return (
          <D7
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D8':
        return (
          <D8
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D10':
        return (
          <D10
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D12':
        return (
          <D12
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D14':
        return (
          <D14
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D16':
        return (
          <D16
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D20':
        return (
          <D20
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D24':
        return (
          <D24
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D30':
        return (
          <D30
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      case 'D100':
        return (
          <D100
            result={result}
            color={hexToHue(hex)}
            saturation={hexToSaturation(hex)}
            randId={randId}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      {/* <div className={`h-${size} w-${size}`}>{renderDie()}</div> */}
      <div style={{ width: size, height: size }}>{renderDie()}</div>
    </>
  )
}

export default Die
