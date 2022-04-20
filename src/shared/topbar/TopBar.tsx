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

    const dynamicStyleLink = (path: string) => {
        return path === router.pathname ? "bg-white rounded" : "";
    };

    const dynamicStyleBoder = (path: string) => {
        return path === router.pathname ? "border-b-4 border-primary bg-white" : "";
    };

    const dynamicStyleText = (path: string) => {
        return path === router.pathname ? "text-primary" : "text-slate-700";
    };

    return (
        <div className='w-screen h-15 flex'>
            <div className="flex py-2 px-6 w-2/12 h-full">
                <div className="bg-primary h-full w-5 mr-5">
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
}
