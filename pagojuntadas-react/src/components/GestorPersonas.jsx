import { useState } from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";
import Modal from "./Modal";


const GestorPersonas = ({onCalcular, onLimpiarResultado}) => {
    const [personas, setPersonas] = useState([]);
    const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
    const [mensaje, setMensaje] = useState("");
    const [personaEditando, setPersonaEditando] = useState(null);


    const mostrarAviso = (texto) =>{
        setMensaje(texto);
        setTimeout(() => setMensaje(""), 3000);
    };

    const agregarPersona = (persona) =>{
        setPersonas([...personas,persona]);
        onLimpiarResultado(); //limpia los resultados al agregar persona
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
        //validacion: verificar que al menos una persona tenga gasto > 0

        const hayGastos = personas.some(persona => persona.gasto > 0);

        if (!hayGastos){
            mostrarAviso("Por favor ingresa al menos un monto mayor a 0");
            return;
        }
        onCalcular(personas);
    };

    const iniciarEdicion = (index) => {
        setPersonaEditando({
            index: index,
            datos: {...personas[index]} //copia los datos
        });

    };

    const actualizarPersona = (personaEditada) =>{
        const nuevasPersonas = [...personas];
        nuevasPersonas[personaEditando.index] = personaEditada;
        setPersonas(nuevasPersonas);
        setPersonaEditando(null); //cierra el modal
        onLimpiarResultado(); //limpia resultados 
        mostrarAviso("Persona actualizada correctamente")
    };

    const cancelarEdicion = () =>{
        setPersonaEditando(null);
    };

    return(
        <div>
            {mensaje && (
                <div className="alerta1">{mensaje}</div>
            )}
            <Formulario onAgregar={agregarPersona}  />
            <Tabla
                personas={personas}
                onSeleccionar = {seleccionarPersona}
                personaSeleccionada = {personaSeleccionada} 
                onEditar={iniciarEdicion}            
            />

            <button onClick={handleCalcular}> Calcular </button>
            <button onClick={eliminarPersonasSeleccionada}> Eliminar </button>
        
        <Modal 
        mostrar={personaEditando !== null}
        onCerrar={cancelarEdicion}
        titulo="Editar Persona"
        >
            {personaEditando && (
                <Formulario
                    onAgregar={actualizarPersona}
                    modoEdicion={true}
                    datosIniciales={personaEditando.datos}
                    onCancelar={cancelarEdicion}
                    textoBoton="Actualizar"
                />
            )}
        </Modal>
        </div>
    );
};

export default GestorPersonas;

