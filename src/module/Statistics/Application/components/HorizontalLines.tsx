import { useEffect, useState } from "react";

interface IProps {
  x1: number;
  y: number;
  x2: number;
  numberOfLines: number;
  heightContainer: number;
}

export default function HorizontalLines(props: IProps) {
  const { x1, y, x2, numberOfLines, heightContainer } = props;

  const [emptyArr, setEmptyArr] = useState<number[]>([]);

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < numberOfLines; ++i) {
      tempArr.push(i);
    }
    setEmptyArr(tempArr);
  }, [numberOfLines]);

  const getYPositionOfLabel = (i: number) => {
    const frecuencia = heightContainer / (numberOfLines - 1);

    return (numberOfLines - 1 - i) * frecuencia + y;
  };
  return (
    <g>
      {emptyArr.map((_, i) => (
        <line
          stroke="#cecece"
          fill="none"
          key={i}
          strokeWidth="1"
          x1={x1}
          y1={getYPositionOfLabel(i)}
          y2={getYPositionOfLabel(i)}
          x2={x2}
        />
      ))}
      <line
        stroke="#cecece"
        fill="none"
        strokeWidth="1"
        x1={x1}
        y1={heightContainer + y}
        y2={heightContainer + y}
        x2={x2}
      />
    </g>
  );
}
