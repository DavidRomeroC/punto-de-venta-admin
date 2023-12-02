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

    const addProduct = () => {

    }

    return (
        <>
            {
                modalAdd
                    ?
                    <div className="border-2 border-red-950 fixed w-screen h-screen bg-[#F0F2F5] z-0 bg-opacity-95 -translate-y-4 self-center " >
                        <div className="border-2 border-white w-full h-10 flex justify-around bg-white shadow-2xl my-2" >
                            <div className="text-lg font-bold" >AGREGAR ARTICULO</div>
                        </div>
                        <div className="w-full h-auto flex justify-center my-4 " >
                            <div className="overflow-y-scroll w-9/12 h-96 bg-[#FFFFFF] shadow-2xl rounded-3xl" >
                                
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-9/12 flex justify-evenly" >
                                <button
                                    onClick={addProduct}
                                    className="w-1/4 h-10 bg-green-800 text-white rounded-lg" >
                                    AGREGAR PRODUCTO
                                </button>
                                <button
                                    onClick={handleShow}
                                    className="w-1/4 h-10 bg-red-800 text-white rounded-lg">
                                    CERRAR
                                </button>
                            </div>
                        </div>

                    </div>
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