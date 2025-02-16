const DieText = ({
  id,
  matrix,
  result,
}: {
  id: string
  matrix: string
  result: number
}) => {
  return (
    <text transform={matrix}>
      <tspan
        className="die"
        textAnchor="middle"
        alignmentBaseline="middle"
        id={id}
        x="1"
        fontSize="36"
        fill="black"
      >
        {result}
      </tspan>
    </text>
  )
}

export default DieText
