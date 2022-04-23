interface Props {
  borderColor: string;
  x: number;
  values: number[];
  spaceBetweenPoints: number;
  getYPoint(v: number): number;
}
export default function CirclePoints(props: Props) {
  const { getYPoint, borderColor, x, values, spaceBetweenPoints } = props;
  return (
    <>
      {values.map((e, i) => (
        <circle
          key={i}
          r="2"
          fill={borderColor}
          stroke={borderColor}
          strokeWidth="2"
          className="hidden md:block"
          cx={spaceBetweenPoints * i + x}
          cy={getYPoint(values[i])}
        />
      ))}
    </>
  );
}
