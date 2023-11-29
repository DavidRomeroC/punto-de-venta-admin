"use client"

import { useState } from "react"


const AgregarArticulo = () => {

    const [modalAdd, setModalAdd] = useState(false)

    const handleShow = () => {
        if (modalAdd === false) {
            setModalAdd(true)
        } else {
            setModalAdd(false)
        }
    }

    console.log(modalAdd)

    return (
        <>
            {
                modalAdd
                    ?
                    <div className="fixed w-screen h-screen bg-slate-300 z-0 bg-opacity-90 -translate-y-4 " >
                        <div className="border-2 border-white w-full h-10 flex justify-around" >
                            <div>AGREGAR ARTICULO</div>
                            <button onClick={handleShow} className="" >CERRAR X</button>
                        </div>

                    </div>
                    // <div className="self-center w-9/12 border-2 border-black h-[720px] fixed z-0 bg- rounded-3xl">
                    // </div>
                    :
                    <div className="w-9/12 flex self-center justify-around h-24 ">
                        <button
                            className="w-36 
                                        h-16 
                                        self-center 
                                        bg-green-500 
                                        rounded-full 
                                        text-white 
                                        border-solid 
                                        border-[3px] 
                                        border-green-950
                                        duration-150
                                        hover:bg-green-800
                                        hover:-translate-y-1
                                        hover:duration-150
                                        hover:border-[4px]
                                        "
                            onClick={handleShow}
                        >
                            AGREGAR ARTICULO +
                        </button>
                    </div>
            }
        </>

    )
}

export default AgregarArticulo