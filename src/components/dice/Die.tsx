import D3 from './D3'
import D4 from './D4'
import D6 from './D6'

const Die = ({
  type,
  size,
  result,
  color,
}: {
  type: string
  size: number
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
      case 'D6':
        return <D6 result={result} color={color} randId={randId} />
      default:
        return null
    }
  }

  return (
    <>
      <div className={`h-${size} w-${size}`}>{renderDie()}</div>
    </>
  )
}

export default Die
