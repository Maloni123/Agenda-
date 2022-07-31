import React from "react";
import'../hojasDEstilos/Tarea.css'
import { AiFillDelete } from "react-icons/ai";

function Tarea({id,texto,completada,eliminarTarea}){
    return(
        <div className="contacto-container">
            <div className="contacto-texto">
                {texto}

            </div>
        <div className="icono" onClick={()=>eliminarTarea(id)}>
      <AiFillDelete/>
        </div>
        </div>
    )
}

export  default Tarea ;