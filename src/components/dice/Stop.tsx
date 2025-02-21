const Stop = ({
  color,
  saturation = 100,
}: {
  color: number
  saturation?: number
}) => {
  return (
    <>
      <stop offset="0" stopColor={`hsl(${color}, ${saturation}%, 30%)`} />
      <stop offset="1" stopColor={`hsl(${color}, ${saturation}%, 50%)`} />
    </>
  )
}

export default Stop
