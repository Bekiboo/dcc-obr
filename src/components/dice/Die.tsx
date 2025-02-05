import D3 from './D3'
import D4 from './D4'
import D6 from './D6'

const Die = ({ type, size }: { type: string; size: number }) => {
  const renderDie = () => {
    switch (type) {
      case 'D3':
        return <D3 result={3} color={25} />
      case 'D4':
        return <D4 result={4} color={25} />
      case 'D6':
        return <D6 result={6} color={25} />
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
