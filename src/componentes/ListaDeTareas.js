import React, {useState}from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../hojasDEstilos/ListaDeTareas.css'


function ListaDeTareas(){
 const[tareas, setTareas]=useState([]);

 const agregarTarea=tarea=>{
if(tarea.texto.trim()){
   tarea.texto = tarea.texto.trim();
   const tareaActualizada=[tarea, ...tareas];
   setTareas(tareaActualizada);

}  
 }
    const eliminarTarea= id=>{
      const tareaActualizada= tareas.filter(tarea=>tarea.id !==id);
      setTareas(tareaActualizada);
    }
    return(
    <>
          
    <TareaFormulario onSubmit={agregarTarea}/>
    <div className="tareas-lista-contenedor">
       {
        tareas.map((tarea)=>
        <Tarea
        key={tarea.id}
        id= {tarea.id}
        texto={tarea.texto}
        eliminarTarea={eliminarTarea} />

        )
       }

        </div>
        </>
    )
}
export default ListaDeTareas;