




const Modal = ({mostrar, onCerrar, titulo, children}) => {

    if (!mostrar) return null; // si mostrar es false no, renderiza nada 

    const handleClickFondo = (e) => {
        //si haces click en el fondo oscuro cierra
        if (e.target.className === 'modal-overlay'){
            onCerrar();
        }
    }
    
    
    return (
        <div className="modal-overlay" onClick={handleClickFondo}>
        <div className="modal-contenido">
            <div className="modal-header">
                <h2>{titulo}</h2>
                <button className="modal-cerrar" onClick={onCerrar}>
                    x
                </button>
            </div>

            <div className="modal-body">
                {children}
            </div>
        </div>
    </div>
);
};

export default Modal;

