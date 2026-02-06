
import { useState } from "react";
import { calcularPorRondas } from "./logic/calcularPorRondas";
import "./index.css";
import GestorPersonas from "./components/GestorPersonas";
import GastosApp from "./components/GastosApp";

const App = () => {

  const [modo, setModo] = useState(null);
  const [resultado, setResultado] = useState(null);
  
  const calcular = (personas) =>{
    const resultadoCalculo = calcularPorRondas(personas);

    console.log("resultado:" , resultadoCalculo);
    
    setResultado(resultadoCalculo);
  };


  return (
    <div>

      {modo !== null && (
        <button
          onClick={()=>{
            setModo(null);
            setResultado(null);
          }}
        >

          ← Volver
        </button>
      )}


      {modo === null && (
        <div>
        <h1>Pago Juntadas</h1>
        <h2>Que quieres hacer</h2>

        <button onClick={() => setModo("gastos")}>
          Dividir gastos entre personas
        </button>

        <button onClick={() => setModo("cuenta")}>
          Dividir una Cuenta
        </button>
        </div>
      )}

      {modo === "gastos" && (
        <GastosApp
          resultado={resultado}
          onCalcular={calcular}
        />
      )}


      {modo === "cuenta" && (
        <p> Modo cuenta Simple proximamente</p>
      )}

    </div>
  );



};


export default App;
