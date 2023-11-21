import Link from "next/link"

const Navbar = () => {

    const navbarItems = [
        {
            route: "/",
            nameRoute: "INICIO"
        },
        {
            route: "/articulos",
            nameRoute: "ARTICULOS"
        },
        {
            route: "/facturacion",
            nameRoute: "FACTURACION"
        },
        {
            route: "/compras",
            nameRoute: "COMPRAS"
        },
        {
            route: "/traspasos",
            nameRoute: "TRASPASOS"
        }
    ]


    return (
        <nav className="bg-blue-900 sticky top-0 z-[1]">
            <ul className="flex justify-evenly m-8">
                {navbarItems.map(({ route, nameRoute }) => (
                    <Link key={nameRoute}
                        href={route}
                        className="bg-orange-500 
                            text-black 
                            h-10 
                            w-32 
                            rounded-md 
                            flex 
                            justify-center
                            hover:bg-red-600
                            hover:duration-300
                            hover:text-white
                        ">
                        <li className="h-8 self-center text-xl" >
                            {nameRoute}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar