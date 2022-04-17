export default function Sidebar() {
    return (
        <aside className="hidden md:block white border border-r border-slate-200 py-8 px-6 h-full w-4/12">
            <div className="flex border-2 border-slate-200 p-2 rounded-md">
                <select className="bg-red-400 text-white py-1.5 px-1 rounded-md focus:outline-none">
                    <option>Nombre</option>
                    <option>Distrito</option>
                    <option>Vacuna </option>
                </select>
                <div className="border border-r border-slate-200 mx-2"></div>
                <input className="w-full focus:outline-none" placeholder="Busca por nombre" />
            </div>
            <nav className="mt-6">

            </nav>
        </aside>
    );
}
