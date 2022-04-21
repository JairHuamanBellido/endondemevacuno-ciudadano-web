import { HtmlHTMLAttributes } from "react";
import { VaccineCenter } from "../../../VaccineCenter/Domain/model/VaccineCenter";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    selectDistrict(distric: string): void;
    vaccineCenters: VaccineCenter[];
}

export default function ListDistrics({ selectDistrict, vaccineCenters, ..._props }: Props) {
    const getDistricts = () => {
        let districts: Map<string, number> = new Map<string, number>();
        vaccineCenters.forEach(vc => {
            districts.set(vc.district, districts.get(vc.district) ?? 0 + 1);
        })
        let result: Array<any> = [];
        districts.forEach((v, k) => {
            result.push({
                'name': k,
                'quantity': v
            })
        })
        return result;
    }

    const handleClick = (name: string) => {
        selectDistrict(name);
    }

    return (
        <div>
            <h2 className="font-semibold lg:mt-7 mb-3">Distritos</h2>
            <ul className="w-full flex-col justify-end ">
                {getDistricts().map((e) => (
                    <li key={e.id} className={`cursor-pointer flex-col border-b-2 border-slate-200 py-5 leading-tight`} onClick={() => handleClick(e.name)}>
                        <h4 className={``}>
                            {e.name}
                        </h4>
                        <span className={`text-xs text-slate-500`}>
                            {e.quantity} centros de vacunación
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
