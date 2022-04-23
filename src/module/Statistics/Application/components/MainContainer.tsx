import { HtmlHTMLAttributes, useEffect, useState } from "react";
import { Spinner } from "../../../../shared";
import { VaccineCenter } from "../../../VaccineCenter/Domain/model/VaccineCenter";
import { InflowByPeriod } from "../../Domain/model/InflowByPeriod";
import useGetInflow from "../hooks/useGetInflow";
import useGetInflow2 from "../hooks/useGetInflow2";
import Filter from "./Filter";
import LineChart from "./LineChart";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  vaccineCenter: VaccineCenter;
  vaccineCenter2?: VaccineCenter;
}

export default function StatisticsMainConatiner({ vaccineCenter, vaccineCenter2 }: Props) {
  const [currentFilter, setCurrentFilter] = useState<string>("Hora");
  const { data, refetch, isLoading, isFetching } = useGetInflow(currentFilter, vaccineCenter.id);
  const { data: data2, refetch: refetch2, isLoading: isLoading2 } = useGetInflow2(currentFilter, (vaccineCenter2) ? vaccineCenter2.id : "");

  const startHour = vaccineCenter?.businessHour
    .split("-")[0]
    .slice(0, -3) as string;

  const onClickFilter = (filter: string) => {
    setCurrentFilter(filter);
  };
  useEffect(() => {
    refetch();
    if (vaccineCenter2)
      refetch2();
  }, [currentFilter, refetch, refetch2, vaccineCenter2]);

  if ((data !== undefined || !isLoading || !isFetching) && (vaccineCenter2 == undefined || !isLoading2)) {
    return (
      <div className="relative w-full">
        <div className="flex items-center justify-end w-full">
          <Filter currentFilter={currentFilter} onClickFilter={onClickFilter} />
        </div>
        <LineChart
          currentFilter={currentFilter}
          labels={
            (data as InflowByPeriod[]).length > 0
              ? (data as InflowByPeriod[]).map((e) => Object.keys(e)[0])
              : [startHour]
          }
          values={(data as InflowByPeriod[]).map(
            (e) => e[Object.keys(e)[0] as string]
          )}
          multi={
            vaccineCenter2 != undefined
          }
          valuestwo={
            (data2 as InflowByPeriod[] != undefined) ?
              (data2 as InflowByPeriod[]).map(
                (e) => e[Object.keys(e)[0] as string]
              ) : undefined}
        />
      </div>
    );
  }
  return <Spinner />;
}
