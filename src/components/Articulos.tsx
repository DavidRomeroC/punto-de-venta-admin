import Link from "next/link"

const Articulos = ({ data }: any) => {

    return (

        <ul className="flex flex-col self-center w-9/12 h-auto text-2xl" >
            {
                data.map(({
                    id,
                    name,
                    description,
                    codigoPrimario,
                    codigoSecundario,
                    satUnidad,
                    satId,
                    sucursal,
                    costo,
                    margen,
                    impuesto,
                    departamento,
                    mueble,
                    fraccionado,
                    existencia,
                    imagen
                }: any) => (
                    <Link
                        href={`/articulos/${codigoPrimario}`}
                        key={id}
                        className="flex w-full 
                        justify-center
                        border-2 h-16 
                        bg-white 
                        text-black
                        font-bold
                        my-1 
                        rounded-lg shadow-md 
                        shadow-blue-100
                        hover:bg-blue-900 hover:text-white hover:-translate-y-1 hover:duration-300
                        ">

                        <p className="self-center w-1/4 ml-6">{codigoPrimario}</p>
                        <h4 className="self-center w-1/4">{name}</h4>
                        <p className="self-center w-1/4">PRECIO: ${costo * ((margen * 0.01) + 1)} </p>
                        <p className="self-center w-1/4"> EXISTENCIA: {existencia} </p>

                    </Link>
                ))
            }
        </ul>
    )
}

export default Articulos