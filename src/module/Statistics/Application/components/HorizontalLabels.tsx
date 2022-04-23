import classesIf from "../../../../utils/dynamicClasses/classesIf";
import tailwindCssBuilder from "../../../../utils/tailwindCssBuilder/tailwindCssBuilder";

interface IProps {
  distanceBetweenLines: number;
  heightContainer: number;
  xStartPoint: number;
  yStartPoint: number;
  numberOfLines: number;
  labels: string[];
  filter: string;
}

export default function HorizontaLabels(props: IProps) {
  const {
    distanceBetweenLines,
    xStartPoint,
    yStartPoint,
    heightContainer,
    labels,
    filter,
  } = props;

  return (
    <>
      <g y={heightContainer + yStartPoint + 25} className="horizonalLabels">
        {labels.map((label, i) => (
          <text
            className={tailwindCssBuilder(
              classesIf(filter === "Hora", "labels-hour"),
              classesIf(filter === "Hoy" && labels.length > 5, "labels-today"),
              classesIf(filter === "Semana", "labels-week"),
              classesIf(filter === "Mes", "labels-month")
            )}
            fontSize={12}
            x={distanceBetweenLines * i + xStartPoint - 4}
            y={heightContainer + yStartPoint + 25}
            key={`label-horizontal-${i}`}
          >
            {label}
          </text>
        ))}
      </g>
    </>
  );
}
