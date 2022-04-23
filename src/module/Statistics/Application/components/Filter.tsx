import cssBuilder from "../../../../utils/tailwindCssBuilder/tailwindCssBuilder";
import classIf from "../../../../utils/dynamicClasses/classesIf";
const filterMap = ["Mes", "Semana", "Hoy", "Hora"];

interface Props {
  currentFilter: string;
  onClickFilter: (filter: string) => void;
}
export default function Filter({ currentFilter, onClickFilter }: Props) {
  const isCurrentSelected = (filter: string): boolean =>
    currentFilter === filter;
  return (
    <div className="flex items-center">
      <p className="text-sm md:text-text-default font-bold mr-2 md:mr-8">Filtros:</p>
      {filterMap.map((e, i) => (
        <div
          onClick={() => {
            onClickFilter(e);
          }}
          className={cssBuilder(
            "px-2 py-1 md:px-3 md:py-2 transition-all rounded cursor-pointer",
            classIf(isCurrentSelected(e), "bg-primary text-white"),
            classIf(
              !isCurrentSelected(e),
              "bg-transparent text-text-secondary hover:text-primary"
            )
          )}
          key={i}
        >
          <p>{e}</p>
        </div>
      ))}
    </div>
  );
}
