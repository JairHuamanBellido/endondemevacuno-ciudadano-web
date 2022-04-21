import { HtmlHTMLAttributes, useState } from "react";

const VACCINES = [
    { id: 1, name: "Covid 19", vaccination: [{ id: 1, name: "Pfizer", selected: false }, { id: 2, name: "Johnshon & Johnson", selected: false }, { id: 6, name: "AstraZeneca", selected: false }, { id: 7, name: "sinopharm", selected: false }] },
    { id: 2, name: "Hepatitis", vaccination: [{ id: 3, name: "Hepatitis A", selected: false }, { id: 4, name: "hepatitis B", selected: false }, { id: 8, name: "hepatitis C", selected: false }] },
    { id: 3, name: "Viruela", vaccination: [{ id: 9, name: "Viruela", selected: false }] },
    { id: 4, name: "Tuberculosis", vaccination: [{ id: 5, name: "BCG", selected: false }] },
];

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    selectVaccines(label: string[]): void;
}

export default function VaccinationList({ selectVaccines, ..._props }: Props) {
    const [vaccinesXDisease, setVaccines] = useState(VACCINES);

    const dynamicStyleBG = (selected: boolean) => {
        return selected ? "bg-primary text-white" : "bg-slate-100 text-slate-500";
    };

    const handleClick = (vaccineId: any, diseaseId: number) => {
        let copy = [...vaccinesXDisease]
        let indexDisease = copy.findIndex((value) => value.id == diseaseId);
        let disease = { ...copy[indexDisease] };
        let indexVaccine = disease?.vaccination.findIndex((vaccine) => vaccine.id == vaccineId);
        disease.vaccination[indexVaccine].selected = !disease.vaccination[indexVaccine].selected;
        copy[indexDisease] = disease;
        setVaccines(copy);
        let allVaccines: string[] = [];
        vaccinesXDisease.forEach(value => {
            allVaccines.push(...value.vaccination.filter(vaccine => vaccine.selected).map(element => element.name));
        });
        selectVaccines(allVaccines);
    };

    return (
        <div>
            <h2 className="font-semibold lg:mt-7 mb-3">Vacunas por enfermedad</h2>
            <ul className="w-full flex-col">
                {vaccinesXDisease.map((disease) => (
                    <li key={disease.id} className={`flex-col border-b-2 border-slate-200 py-3`}>
                        <h4 className={`font-semibold`}>
                            {disease.name}
                        </h4>
                        <div className="flex justify-between md:space-x-5 flex-wrap">
                            {disease.vaccination.map((vaccine) => (
                                <span key={vaccine.name} className={`mt-2 text-sm p-1.5 font-semibold rounded-md capitalize cursor-pointer h-fit ${dynamicStyleBG(
                                    vaccine.selected
                                )}`} onClick={() => handleClick(vaccine.id, disease.id)}>
                                    {vaccine.name}
                                </span>))
                            }
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}
