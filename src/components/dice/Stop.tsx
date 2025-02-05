const Stop = ({ color }: { color: number }) => {
  return (
    <>
      <stop offset="0" stopColor={`hsl(${color}, 100%, 30%)`} />
      <stop offset="1" stopColor={`hsl(${color}, 100%, 50%)`} />
    </>
  )
}

export default Stop
