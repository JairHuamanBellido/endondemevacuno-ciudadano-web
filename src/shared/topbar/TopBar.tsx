import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> { }
const Links = [
    { id: 1, path: "/otro", label: "Inicio" },
    {
        id: 2,
        path: "/",
        label: "Buscar centros de vacunación",
    },
];

export default function TopBar({ ...props }: Props) {
    const router = useRouter();

    // const isActive = 8
    const dynamicStyleLink = (path: string) => {
        return path === router.pathname ? "bg-primary rounded" : "";
    };

    const dynamicStyleBoder = (path: string) => {
        return path === router.pathname ? "border-b-4 border-red-400" : "";
    };

    const dynamicStyleText = (path: string) => {
        return path === router.pathname ? "text-red-400" : "text-slate-700";
    };

    return (
        <div className='w-screen h-15 flex'>
            <div className="flex py-2 px-6 w-2/12 h-full">
                <div className="bg-red-400 h-full w-5 mr-5">
                </div>
                <h1>EnDondeMeVacuno</h1>
            </div>
            <nav className="flex w-full mx-20">
                <ul className="w-full flex justify-end">
                    {Links.map((e) => (
                        <li key={e.id} className={`cursor-pointer flex mx-5 ${dynamicStyleBoder(
                            e.path
                        )}`}>
                            <Link href={e.path}>
                                <a
                                    className={`flex p-2 text-inherit items-center text-sm w-full text-center ${dynamicStyleLink(
                                        e.path
                                    )}`}
                                >
                                    <span className={`font-semibold ${dynamicStyleText(e.path)}`}>
                                        {e.label}
                                    </span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
    {/*<aside className="hidden md:block white border border-r border-slate-200  py-8 px-6 h-full">
            <div className="flex border-2 border-slate-200 p-2 rounded-md">
                <select className="bg-red-400 text-white p-1.5 rounded-md">
                    <option>Nombre</option>
                </select>
                <div className="border border-r border-slate-200 mx-2"></div>
                <input placeholder="Busca por nombre" />
            </div>
            <nav className="mt-6">

            </nav>
    </aside>*/}
}
