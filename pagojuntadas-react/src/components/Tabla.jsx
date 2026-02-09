const Tabla = ({personas, onSeleccionar, personaSeleccionada, onEditar}) =>{


    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Gasto</th>
                    <th>Acciones</th>
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
                    <td>
                        <button
                        className="btn-editar"
                        onClick={(e) =>{
                            e.stopPropagation();
                            onEditar(index);
                        }}
                        >
                            ✏️
                        </button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>

        
    );
};


export default Tabla;