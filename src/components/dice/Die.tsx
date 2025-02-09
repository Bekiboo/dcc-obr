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

const Die = ({
  type,
  size,
  result,
  color,
}: {
  type: string
  size: number | string
  result: number
  color: number
}) => {
  const randId = Math.random().toString(36).substring(7)

  const renderDie = () => {
    switch (type) {
      case 'D3':
        return <D3 result={result} color={color} randId={randId} />
      case 'D4':
        return <D4 result={result} color={color} randId={randId} />
      case 'D5':
        return <D5 result={result} color={color} randId={randId} />
      case 'D6':
        return <D6 result={result} color={color} randId={randId} />
      case 'D7':
        return <D7 result={result} color={color} randId={randId} />
      case 'D8':
        return <D8 result={result} color={color} randId={randId} />
      case 'D10':
        return <D10 result={result} color={color} randId={randId} />
      case 'D12':
        return <D12 result={result} color={color} randId={randId} />
      case 'D14':
        return <D14 result={result} color={color} randId={randId} />
      case 'D16':
        return <D16 result={result} color={color} randId={randId} />
      case 'D20':
        return <D20 result={result} color={color} randId={randId} />
      case 'D24':
        return <D24 result={result} color={color} randId={randId} />
      case 'D30':
        return <D30 result={result} color={color} randId={randId} />
      case 'D100':
        return <D100 result={result} color={color} randId={randId} />
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
