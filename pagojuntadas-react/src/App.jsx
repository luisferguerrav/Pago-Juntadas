
import { useState } from "react";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import { calcularPorRondas } from "./logic/calcularPorRondas";
import "./index.css";
import GestorPersonas from "./components/GestorPersonas";

const App = () => {
  const [resultado, setResultado] = useState(null);

  const calcular = (personas) =>{
    const resultadoCalculo = calcularPorRondas(personas);

    console.log("resultado:" , resultadoCalculo);
    
    setResultado(resultadoCalculo);
  };


  return (
    <div>
      <h1> Pago Juntadas</h1>
      <GestorPersonas onCalcular={calcular}/>


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


export default App;
