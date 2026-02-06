
import { useState } from "react";


const Formulario = ({onAgregar}) =>{
    const [nombre,setNombre] = useState("");
    const [gasto,setGasto] = useState("");
    const [mensaje, setMensaje] = useState("");


    const mostrarAviso = (texto) =>{
        setMensaje(texto);
        setTimeout(() => setMensaje(""), 3000);
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        //VALIDACION DE NOMBRE 
        
        if (!nombre) {
            mostrarAviso ("Por favor ingresa un nombre");
            return;
        }
        //VALIDACION DE GASTO 

        if (gasto === "" || gasto === null || gasto === undefined){
            mostrarAviso("Por favor ingresa un monto (minimo 0)");
            return;
        }
        //VALIDACION DE MONTOS NEGATIVOS 

        if (Number(gasto) < 0) {
            mostrarAviso("No se permiten montos negativos");
            return;
        }


        onAgregar({
            nombre: nombre.trim(),
            gasto: Number(gasto)
        });

        setNombre("");
        setGasto("");
    };


    return (
        <form onSubmit={handleSubmit}>
            {/*mesnsaje de aviso*/}
            {mensaje && (
                <div className="alerta1"> {mensaje} </div>
            )}

            <input
            type="text"
                placeholder = "nombre"
                value = {nombre}
                onChange = {(e) =>setNombre(e.target.value)}           
            />

            <input
                type = "number"
                placeholder = "gasto"
                value = {gasto}
                onChange = {(e) => setGasto(e.target.value)}
                min = "0"
                step = "0.01"
            />

            <button type="submit">Agregar</button>

        </form>

    );


};


export default Formulario;