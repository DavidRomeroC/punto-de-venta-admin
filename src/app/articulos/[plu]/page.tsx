
async function getArtcicle() {
    const res = await fetch("http://localhost:5000/articulos", { cache: 'no-store' })
    const data = res.json()
    return data
}

async function Article({params}: any) {

    const articles = await getArtcicle()

    const articulo = articles.filter((a: any) => a.codigoPrimario === params.plu)

    const {name, codigoPrimario} = articulo[0]

    return (
        <div>
            <h1>{name}</h1>
            <h2>{codigoPrimario}</h2>
        </div>
    )
}

export default Article