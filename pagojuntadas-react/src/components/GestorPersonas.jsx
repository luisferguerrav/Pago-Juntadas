import { useState } from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";


const GestorPersonas = ({onCalcular}) => {
    const [personas, setPersonas] = useState([]);
    const [personaSeleccionada, setPersonaSeleccionada] = useState(null);


    const agregarPersona = (persona) =>{
        setPersonas([...personas,persona]);
    };

    const seleccionarPersona = (index) =>{
        setPersonaSeleccionada(index);
    };

    const eliminarPersonasSeleccionada = () =>{
        if (personaSeleccionada !==null) {
            const nuevasPersonas = personas.filter((_,i) => i !== personaSeleccionada);
            setPersonas(nuevasPersonas);
            setPersonaSeleccionada(null);
        }

    };


    const handleCalcular = () =>{
        onCalcular(personas); //envia las personas a App para calcular

    };

    return(
        <div>
            <Formulario onAgregar={agregarPersona}  />
            <Tabla
                personas={personas}
                onSeleccionar = {seleccionarPersona}
                personaSeleccionada = {personaSeleccionada} 
            />

            <button onClick={handleCalcular}> Calcular </button>
            <button onClick={eliminarPersonasSeleccionada}> Eliminar </button>
        </div>

    );

};

export default GestorPersonas;

