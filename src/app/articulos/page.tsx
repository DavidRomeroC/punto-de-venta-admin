import Articulos from "@/components/Articulos"
import AgregarArticulo from "@/components/AgregarArticulo"

async function getData() {
    const res = await fetch("http://localhost:5000/articulos", { cache: 'no-store' })
    const data = res.json()
    return data
}

async function ArticulosPage() {
    const data = await getData()
    return (
        <div className="flex flex-col w-full" >
            <AgregarArticulo />
            <Articulos data={data} />
        </div>
    )
}

export default ArticulosPage