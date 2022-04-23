import { HtmlHTMLAttributes } from "react";
import { VaccineCenter } from "../../../VaccineCenter/Domain/model/VaccineCenter";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    selectVaccineCenter(response: string): void;
    vaccineCenters: VaccineCenter[];
}
export default function ListVaccineCenters({ selectVaccineCenter, vaccineCenters, ..._props }: Props) {
    return (
        <div className="h-full">
            <h2 className="font-semibold lg:mt-7 mb-3 h-3">Centros de vacunación</h2>
            <ul className="h-[calc(100%)] overflow-auto">
                {vaccineCenters.map((e) => (
                    <li key={e.id} className={`cursor-pointer flex-col border-b-2 border-slate-200 py-5 leading-tight`} onClick={() => { selectVaccineCenter(e.id) }}>
                        <h4 className={``}>
                            {e.name}
                        </h4>
                        <span className={`text-xs text-slate-500`}>
                            {e.district}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
