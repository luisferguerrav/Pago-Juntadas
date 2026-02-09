import GestorPersonas from "./GestorPersonas";


const GastosApp = ({resultado, onCalcular, onLimpiarResultado}) => {



    return (
    <div>
      <h1> Pago Juntadas</h1> 
        <GestorPersonas onCalcular={onCalcular} onLimpiarResultado ={onLimpiarResultado}/>


      {resultado && (
        <div className="resumen-general">
          <div>
          <h2>Resumen general </h2>
          <p> <strong>Total Gastado:</strong> ${resultado.total}</p>
          <p> <strong>Cada uno debe:</strong> ${resultado.promedioPorPersona}</p>
        </div>

          <h2>Calculo por rondas</h2>
          {resultado.rondas && resultado.rondas.map((ronda, i) => (
            <div key={i} className="ronda-container">
              <h3> ronda {i + 1}: {ronda.pagador}</h3>
              <p> <strong>Gasto:</strong> ${ronda.gastoTotal}</p>
              <p> <strong>cada uno paga:</strong> ${ronda.montoPorPersona}</p>

            <div className="ronda-pagos">
              <h4> Pagos: </h4>

              <ul>
                {ronda.pagos && ronda.pagos.map ((pago, j) =>(
                  <li key={j}>
                    {pago.quien} paga ${pago.paga} a {pago.a}
                  </li>
                ))}
              </ul>


                <h4>Saldos después de esta ronda:</h4>
                <ul>
                  {ronda.saldosDespues.map((s, k) => (
                    <li key={k}>
                      {s.nombre}: ${s.saldo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        <div className="balance-final">
        <h2>Balance Final</h2>
        {resultado.balanceFinal && resultado.balanceFinal.map ((persona, i) =>(
          <p key={i}>
            <strong>{persona.nombre}:</strong>
            {persona.saldo >= 0
            ? ` le deben $${persona.saldo}`
            : ` debe $${Math.abs(persona.saldo)}`}
          </p>
        ))}
        </div>

        </div>
      )}

    </div>
  );
};


export default GastosApp;