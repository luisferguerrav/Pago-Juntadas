
import { useState } from "react";


const Formulario = ({onAgregar}) =>{
    const [nombre,setNombre] = useState("");
    const [gasto,setGasto] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();

        if (!nombre) return;

        onAgregar({
            nombre,
            gasto: Number(gasto)
        });

        setNombre("");
        setGasto("");
    };


    return (
        <form onSubmit={handleSubmit}>
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
            />

            <button type="submit">Agregar</button>

        </form>

    );


};


export default Formulario;