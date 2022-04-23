interface IProps {
  x: number;
  y1: number;
  y2: number;
}
export default function LineIndicator(props: IProps) {
  const { x, y1, y2 } = props;
  return (
    <path
      stroke={"#acacac"}
      width={20}
      strokeWidth="1"
      d={`M ${x},${y1}L${x}, ${y2}`}
    />
  );
}
