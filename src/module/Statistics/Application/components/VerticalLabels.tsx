import { useEffect, useState } from "react";

function getBaseLog(x: number, y: number) {
  return Math.log(y) / Math.log(x);
}

function getMaxValueOfArray(arr: number[]): number {
  let maxValue = arr[0];
  arr.forEach((e) => {
    if (e > maxValue) {
      maxValue = e;
    }
  });
  return maxValue;
}

function getMaxValueInBase10(maxValue: number): number {
  const exponent = Math.floor(getBaseLog(10, maxValue));
  const baseCentena = Math.pow(10, exponent);
  const maxValueInBase10 =
    maxValue % baseCentena === 0
      ? maxValue
      : Math.ceil(maxValue / Math.pow(10, exponent - 1)) *
        Math.pow(10, exponent - 1);

  return maxValueInBase10;
}

interface IProps {
  values: number[];
  valuestwo: number[] | undefined;
  lengthVerticalLabels: number;
  heightContainer: number;
  yStartPosition: number;
  xStartPosition: number;
  setHighValueLeftLegend: React.Dispatch<React.SetStateAction<number>>;
}

export default function VerticalLabels(props: IProps) {
  const {
    values,
    valuestwo,
    lengthVerticalLabels,
    heightContainer,
    yStartPosition,
    xStartPosition,
    setHighValueLeftLegend,
  } = props;

  const [labels, setLabels] = useState<number[]>([]);

  useEffect(() => {
    if (values.length === 0) {
      let arr = [];
      for (let i = 0; i < lengthVerticalLabels; i++) {
        arr.push(i * 4);
      }
      setLabels(arr);
    }
  }, [values, lengthVerticalLabels]);
  useEffect(() => {
    if (values.length > 0) {
      const maxValue = getMaxValueOfArray([
        ...values,
        ...(valuestwo !== undefined ? (valuestwo as number[]) : [0]),
      ]);
      if (maxValue !== 0) {
        const maxValueInBase10 = getMaxValueInBase10(maxValue);

        const frequencyValue = Math.floor(
          maxValueInBase10 / (lengthVerticalLabels - 1)
        );

        let valuesLeft = [];
        for (let i = 0; i < lengthVerticalLabels - 1; ++i) {
          valuesLeft.push(i * frequencyValue);
        }
        valuesLeft.push(maxValueInBase10);
        setLabels(valuesLeft);
        setHighValueLeftLegend(maxValueInBase10);
      } else {
        setHighValueLeftLegend(0);
      }
    }
  }, [values, lengthVerticalLabels, setHighValueLeftLegend]);

  const getYPositionOfLabel = (i: number) => {
    const frecuencia = heightContainer / (labels.length - 1);

    return (labels.length - 1 - i) * frecuencia + yStartPosition;
  };

  return (
    <g>
      {labels.map((e, i) => (
        <g key={i}>
          <text fontSize={12} x={0} y={getYPositionOfLabel(i)}>
            {e}
          </text>
          <line
            stroke="#000"
            fill="none"
            strokeWidth="1"
            x1={xStartPosition}
            y1={getYPositionOfLabel(i)}
            y2={getYPositionOfLabel(i)}
            x2={xStartPosition - 10}
          />
        </g>
      ))}
    </g>
  );
}
