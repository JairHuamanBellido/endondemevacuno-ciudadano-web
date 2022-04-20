import { HtmlHTMLAttributes, useState } from "react";
import BackIcon from "../../../../shared/icon/BackIcon";
import CloseIcon from "../../../../shared/icon/CloseIcon";
import SearchIcon from "../../../../shared/icon/SearchIcon";
import { VaccineCenter } from "../../../VaccineCenter/Domain/model/VaccineCenter";
import ListDistrics from "./ListDistricts";
import ListVaccineCenters from "./ListVaccineCenters";
import VaccinationList from "./VaccinationList";
import VaccineCenterDetail from "./VaccineCenterDetail";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    selectVaccineCenterToMap(select: string): void;
    vaccineCenters: VaccineCenter[];
}

export default function SearchVaccineCenterContainer({ selectVaccineCenterToMap, vaccineCenters, ...props }: Props) {
    const searchTypes = [
        { id: 0, name: "nombre", placeholder: "Busca por nombre" },
        { id: 1, name: "distrito", placeholder: "Selecciona un distrito" },
        { id: 2, name: "vacuna", placeholder: "Selecciona una o más vacunas" },
    ]

    const [chosenSearch, setChosenSearch] = useState(0);
    const [value, setValue] = useState("");
    const [searching, setSearching] = useState(false);
    const [selectResult, setSelectResult] = useState("");

    const handleChangeSearchType = (id: number) => {
        setChosenSearch(id);
        setValue("");
    }

    const selectMap = (select: string) => {
        setSelectResult(select);
        selectVaccineCenterToMap(select);
    }

    const selectVaccines = (vaccineList: string[]) => {
        let v = (vaccineList.length > 0) ? vaccineList[0] : "";
        for (let i = 1; i < vaccineList.length; ++i) {
            if (i + 1 < vaccineList.length)
                v += ", "
            else
                v += " y "
            v += vaccineList[i]
        }
        setValue(v);
    }

    const selectDistrict = (distric: string) => {
        setValue(distric);
    }

    const comeBack = () => {
        if (selectResult != "")
            selectMap("");
        else
            setSearching(false);
    }

    const clearInput = () => {
        setValue("");
    }

    const getFilteredVaccinationCenter = () => {
        if (!searching)
            return vaccineCenters;
        if (chosenSearch == 0)
            return vaccineCenters.filter(vc => vc.name.toUpperCase().includes(value.toUpperCase()));
        if (chosenSearch == 1)
            return vaccineCenters.filter(vc => vc.district.includes(value));
        if (chosenSearch == 2) {
            let vaccines = value.split(/[y,]+/);
            return vaccineCenters.filter(vc => {
                let response = false;
                vc.vaccines.forEach((v: any) => {
                    if (vaccines.includes(v.name))
                        response = true;
                });
                return response;
            });
        }
        return vaccineCenters
    }

    const getVaccineCenterSelected = () => {
        return vaccineCenters.find(vc => vc.id == selectResult)!;
    }

    const isEnteringData = () => {
        return !hasBeenSelected() && !searching;
    }

    const hasBeenSelected = () => {
        return selectResult != ""
    }

    return (
        <aside className="hidden md:block white border border-r border-slate-200 py-8 px-6 h-full w-4/12">
            <div className="flex border-2 border-slate-200 p-2 rounded-md">
                {isEnteringData() &&
                    <select value={chosenSearch} className="bg-primary text-white py-1.5 px-1 rounded-md focus:outline-none capitalize"
                        onChange={e => handleChangeSearchType(+e.target.value)}>
                        {
                            searchTypes.map((st) => (
                                <option key={`${st.name}`} value={st.id}>{st.name}</option>
                            ))
                        }
                    </select>
                }
                {(hasBeenSelected() || searching) && (
                    <div onClick={() => comeBack()} className="flex items-center justify-center mr-2" >
                        <BackIcon color="#000" />
                    </div>)}
                {isEnteringData() && <div className="border border-r border-slate-200 mx-2"></div>}
                <input className="w-full focus:outline-none text-ellipsis h-9" placeholder={searchTypes[chosenSearch].placeholder} value={value}
                    onChange={e => setValue(e.target.value)}
                    readOnly={chosenSearch != 0 || hasBeenSelected()} />
                {value != "" && !hasBeenSelected() && (<div onClick={clearInput} className="flex items-center justify-center" ><CloseIcon color="#000" /></div>)}
                {value != "" && isEnteringData() && <div className="border border-r border-slate-200 mx-2"></div>}
                {isEnteringData() && (
                    <div onClick={() => setSearching(true)} className="flex items-center justify-center" >
                        <SearchIcon color="#000" />
                    </div>
                )}
            </div>
            {(chosenSearch == 0 || searching) && !hasBeenSelected() && (<ListVaccineCenters selectVaccineCenter={selectMap} vaccineCenters={getFilteredVaccinationCenter()} />)}
            {chosenSearch == 1 && isEnteringData() && (<ListDistrics selectDistrict={selectDistrict} vaccineCenters={getFilteredVaccinationCenter()} />)}
            {chosenSearch == 2 && isEnteringData() && (<VaccinationList selectVaccines={selectVaccines} />)}
            {hasBeenSelected() && (<VaccineCenterDetail vaccineCenter={getVaccineCenterSelected()} />)}
        </aside >
    );
}