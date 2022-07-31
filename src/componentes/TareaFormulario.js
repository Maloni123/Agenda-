
import React,{useState}from "react";
import '../hojasDEstilos/TareaFormulario.css'
import { AiFillFileAdd, AiFillPropertySafety } from "react-icons/ai";
import {v4 as uuidv4 } from 'uuid';
  


function TareaFormulario(props){
  
    const [input, setInput]= useState('');
   
    const manejarCambio= e=>{
     setInput(e.target.value);
     console.log(e.target.value);
    }
   
    const manejarEnvio = e=>{
        e.preventDefault();
        const tareaNueva ={
            id:uuidv4(),
            texto: input,
            
        }
        props.onSubmit(tareaNueva);
    }


return(
<form  className="formulario" onSubmit={manejarEnvio}>
<input className="input"
type="text"
placeholder="nombre,email,telefono"
name="texto"
onChange={manejarCambio}
/>

<button className="boton">Agregar<AiFillFileAdd/></button>
</form>

)
}

export default TareaFormulario;