import Articulos from "@/components/Articulos"

async function getData() {
    const res = await fetch("http://localhost:5000/articulos", { cache: 'no-store' })
    const data = res.json()
    return data
}

async function ArticulosPage() {
    const data = await getData()
    return (
        <div className="flex flex-col w-full" >
            <div className="w-5/6 flex self-center justify-around h-24 ">
                <button> AGREGAR ARTICULO </button>
                <form action="GET">
                    <input type="text" placeholder="Buscar un articulo" />
                    <button>BUSCAR</button>
                </form>
            </div>
            <Articulos data={data} />
        </div>
    )
}

export default ArticulosPage