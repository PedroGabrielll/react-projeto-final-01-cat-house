 import React, { useEffect } from "react"
 import gato from  "../Certificado/fotos/garfield.png"
 import "./Certificado.css"
 import CAT from "../Certificado/fotos/CAT.png"
 import teste from "../Certificado/fotos/teste.jpg"

 

export default function Certificado(props) {

    useEffect(() => {
        document.title = "Certificado"
    })

    return(

        <>
        <div className="container">
        <div className="garf">
        </div>
        <div className="teste">
        <h1 className="titulo">CERTIFICADO DE ADOÇÃO</h1>
        </div>
        <div>
        <img className=" carimbo" src={CAT} alt="Cat"/>
        </div>
        <div className="perfil1">
            <img className="perfil" src={teste} alt="teste"/>
        </div>
        </div>
        </>
    )
}

