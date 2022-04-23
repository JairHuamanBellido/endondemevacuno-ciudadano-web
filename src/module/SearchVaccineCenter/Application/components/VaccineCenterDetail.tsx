import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes, useState } from "react";
import SearchIcon from "../../../../shared/icon/SearchIcon";
import StatisticsMainConatiner from "../../../Statistics/Application/components/MainContainer";
import { VaccineCenter } from "../../../VaccineCenter/Domain/model/VaccineCenter";

const Tab = ({ href, isSelected, title }: any) => (
    <Link replace href={href}>
        <a
            className={`w-full px-5 bg-blue ${isSelected ? "text-black border-b-2 border-black" : "text-slate-500 border-b-2 border-slate-200"}`}
        >
            {title}
        </a>
    </Link>
)

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    vaccineCenter: VaccineCenter;
    vaccineCenters: VaccineCenter[];
}

export default function VaccineCenterDetail({ vaccineCenter, vaccineCenters }: Props) {
    const { query } = useRouter();

    const isTabOneSelected = !query.stadistics && !query.compare;
    const isTabTwoSelected = !!query.stadistics;
    const isTabThreeSelected = !!query.compare;

    const [vaccineCenter2, setVaccineCenter2] = useState<VaccineCenter>();
    const [value, setValue] = useState<string>('');

    const getFilteredVaccinationCenter = () => {
        return vaccineCenters.filter(vc => vc.name.toUpperCase().includes(value.toUpperCase())).slice(0, 3);
    }

    const dynamicStyleBG = (influx: string) => {
        switch (influx) {
            case 'Sin data': return 'bg-lime-500';
            case 'baja': return 'bg-lime-500';
            case 'media': return 'bg-orange-500';
            case 'alta': return 'bg-primary';
        }
    };

    if (vaccineCenter != undefined)
        return (
            <div className="lg:mt-7">
                <div className="flex flex-wrap md:flex-nowrap mb-7 justify-between items-center space-y-3 md:space-y-0">
                    <div className="flex justify-between">
                        <h2 className="text-primary font-semibold text-lg ">{vaccineCenter.name}</h2>
                        <div className="hidden lg:block border border-r border-slate-200 mx-7"></div>
                    </div>
                    <div className="flex flex-wrap">
                        <span className="text-slate-500 mr-3">Afluencia</span>
                        <span className={`text-white ${dynamicStyleBG(vaccineCenter.affluenceLevel)} px-3 py-1 rounded-md capitalize`}>{vaccineCenter.affluenceLevel}</span>
                    </div>
                </div>
                <nav className="flex">
                    <Tab className="hidden" href="/" title="Inf" isSelected={isTabOneSelected} />
                    <Tab href="/?stadistics=true" title="Estadísticas" isSelected={isTabTwoSelected} />
                    <Tab href="/?compare=true" title="Comparar" isSelected={isTabThreeSelected} />
                </nav>

                {isTabOneSelected && <section>
                    <div className="flex flex-wrap justify-between my-5 space-y-2 md:space-y-0">
                        <div className="w-full md:w-5/12">
                            <p className="text-sm md:text-base text-slate-500">Dirección</p>
                            <p className="text-sm md:text-base">{vaccineCenter.direction}</p>
                        </div>
                        <div className="w-5/12">
                            <p className="text-sm md:text-base text-slate-500">Distrito</p>
                            <p className="text-sm md:text-base" >{vaccineCenter.district}</p>
                        </div>
                    </div>

                    <div className="flex">
                        <p className="w-2/4 text-sm md:text-base text-slate-500">Vacunas</p>
                    </div>
                    {vaccineCenter.vaccines.map(((v: string) => (
                        <div key={v} className="flex">
                            <p className="text-sm md:text-base">{v}</p>
                        </div>
                    )))}
                </section>}
                {isTabTwoSelected &&
                    <section className="flex flex-col">
                        <span className="text-sm md:text-base my-5 break-words max-w-full">
                            Cantidad de personas asistadas al centro de vacunación en el último mes, semana y día
                        </span>
                        <StatisticsMainConatiner vaccineCenter={vaccineCenter} />
                    </section>}

                {isTabThreeSelected && <section>
                    <div className="flex border mt-2 rounded-md">
                        <div className="flex items-center justify-center mx-2" >
                            <SearchIcon color="#000" />
                        </div>
                        <input className="w-full focus:outline-none text-ellipsis h-9 " placeholder={"Busca por nombre"} value={value} onChange={e => setValue(e.target.value)} />
                    </div>
                    {value != '' && value != vaccineCenter2?.name &&
                        < ul className="absolute overflow-auto z-50 bg-white w-[calc(100%-44px)] border mt-2">
                            {
                                getFilteredVaccinationCenter().map((vc) =>
                                (<li key={vc.id} className={`cursor-pointer flex-col border-b-2 border-slate-200 py-5 leading-tight`} onClick={() => { setVaccineCenter2(vc); setValue(vc.name) }}>
                                    <h4 className={``}>
                                        {vc.name}
                                    </h4>
                                    <span className={`text-xs text-slate-500`}>
                                        {vc.district}
                                    </span>
                                </li>)
                                )
                            }
                        </ul>
                    }
                    {vaccineCenter2 &&
                        <div className="mt-2 md:flex md:justify-between">
                            <div className="flex w-full items-center md:justify-center">
                                <div className="bg-primary h-5 w-5 rounded-md mr-2"></div>
                                <span>{vaccineCenter.name}</span>
                            </div>
                            <div className="flex w-full items-center md:justify-center">
                                <div className="bg-secundary h-5 w-5 rounded-md mr-2"></div>
                                <span>{vaccineCenter2.name}</span>
                            </div>
                        </div>
                    }
                    {vaccineCenter2 &&
                        <div className="mt-5">
                            <StatisticsMainConatiner vaccineCenter={vaccineCenter} vaccineCenter2={vaccineCenter2} />
                        </div>
                    }

                </section>}
            </div >
        );
    else
        return (<div></div>);
}