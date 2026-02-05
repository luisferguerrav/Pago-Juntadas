const Tabla = ({personas, onSeleccionar, personaSeleccionada}) =>{


    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Gasto</th>
                </tr>
            </thead>

            <tbody>
                {personas.map((p,index) =>
                <tr key={index}
                    onClick={() => onSeleccionar(index)}
                    className={`cursor-eliminar ${personaSeleccionada === index ? 'fila-seleccionada' : ''} `}
                >
                    <td>{p.nombre}</td>
                    <td>{p.gasto}</td>
                </tr>
                )}
            </tbody>
        </table>

        
    );
};


export default Tabla;