import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes } from "react";
import { VaccineCenter } from "../../../VaccineCenter/Domain/model/VaccineCenter";

const Tab = ({ href, isSelected, title }: any) => (
    <Link replace href={href}>
        <a
            className={`px-5 bg-blue ${isSelected ? "text-black border-b-2 border-black" : "text-slate-500"}`}
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
                <div className="flex mb-7 items-center">
                    <div className="flex">
                        <h2 className="text-primary font-semibold text-lg ">{vaccineCenter.name}</h2>
                        <div className="border border-r border-slate-200 mx-7"></div>
                    </div>
                    <div>
                        <span className="text-slate-500">Afluencia</span>
                        <span className={`text-white ${dynamicStyleBG(vaccineCenter.influx)} px-3 py-1 mx-3 rounded-md capitalize`}>{vaccineCenter.influx}</span>
                    </div>
                </div>
                <nav className="border-b-2">
                    <Tab href="/" title="Información general" isSelected={isTabOneSelected} />
                    <Tab href="/?tabTwo=true" title="Estadísticas" isSelected={isTabTwoSelected} />
                </nav>

                {isTabOneSelected && <section>
                    <div className="flex my-5">
                        <div className="w-2/4">
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
                        <label className="font-medium my-5" htmlFor="input">
                            Cantidad de personas asistadas al centro de vacunación en el último mes, semana y día
                        </label>
                        <div className="flex">
                            <label className="font-semibold mr-5">Filtros:</label>
                            <div className="mb-5">
                                <span className="p-2 m-2 text-slate-500 cursor-pointer">Mes</span>
                                <span className="p-2 m-2 text-white bg-primary rounded-md cursor-pointer">Semana</span>
                                <span className="p-2 m-2 text-slate-500 cursor-pointer">Hoy</span>
                                <span className="p-2 m-2 text-slate-500 cursor-pointer">Hora</span>
                            </div>
                        </div>
                        <img src="https://media.discordapp.net/attachments/690694542550106222/959168968264921158/unknown.png" />
                    </section>}
            </div>
        );
    else
        return (<div></div>);
}