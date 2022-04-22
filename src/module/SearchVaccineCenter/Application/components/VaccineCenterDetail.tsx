import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes } from "react";
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
}

export default function VaccineCenterDetail({ vaccineCenter }: Props) {
    const { query } = useRouter();

    const isTabOneSelected = !query.tabTwo;
    const isTabTwoSelected = !!query.tabTwo;

    const dynamicStyleBG = (influx: string) => {
        switch (influx) {
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
                    <div>
                        <span className="text-slate-500">Afluencia</span>
                        <span className={`text-white ${dynamicStyleBG(vaccineCenter.influx)} px-3 py-1 mx-3 rounded-md capitalize`}>{vaccineCenter.influx}</span>
                    </div>
                </div>
                <nav className="flex">
                    <Tab className="hidden" href="/" title="Información General" isSelected={isTabOneSelected} />
                    <Tab href="/?tabTwo=true" title="Estadísticas" isSelected={isTabTwoSelected} />
                </nav>

                {isTabOneSelected && <section>
                    <div className="flex flex-wrap my-5 space-y-2 md:space-y-2">
                        <div className="w-full md:w-2/4">
                            <p className="text-sm text-slate-500">Dirección</p>
                            <p className="text-sm">{vaccineCenter.direction}</p>
                        </div>
                        <div className="w-2/4">
                            <p className="text-sm text-slate-500">Distrito</p>
                            <p className="text-sm">{vaccineCenter.district}</p>
                        </div>
                    </div>

                    <div className="flex">
                        <p className="w-2/4 text-sm text-slate-500">Vacunas</p>
                        <p className="w-2/4 text-sm text-slate-500">Cantidad</p>
                    </div>
                    {vaccineCenter.vaccines.map(((v: any) => (
                        <div key={v.name} className="flex">
                            <p className="w-2/4 text-sm">{v.name}</p>
                            <p className="w-2/4 text-sm">{v.quantity}</p>
                        </div>
                    )))}
                </section>}
                {isTabTwoSelected &&
                    <section className="flex flex-col">
                        <span className="font-medium my-5 break-words max-w-full">
                            Cantidad de personas asistadas al centro de vacunación asdsad
                        </span>
                        <div className="flex w-full flex-wrap">
                            <label className="font-semibold mr-5">Filtros:</label>
                            <div className="mb-5">
                                <span className="p-2 m-2 text-slate-500 cursor-pointer">Mes</span>
                                <span className="p-2 m-2 text-white bg-primary rounded-md cursor-pointer">Semana</span>
                                <span className="p-2 m-2 text-slate-500 cursor-pointer">Hoy</span>
                                <span className="p-2 m-2 text-slate-500 cursor-pointer">Hora</span>
                            </div>
                        </div>
                    </section>}
            </div>
        );
    else
        return (<div></div>);
}