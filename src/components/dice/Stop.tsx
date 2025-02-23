const Stop = ({
  color,
  saturation = 100,
}: {
  color: number
  saturation?: number
}) => {
  return (
    <>
      <stop offset="0" stopColor={`hsl(${color}, ${saturation * 1.2}%, 40%)`} />
      <stop offset="1" stopColor={`hsl(${color}, ${saturation * 1.2}%, 60%)`} />
    </>
  )
}

export default Stop
