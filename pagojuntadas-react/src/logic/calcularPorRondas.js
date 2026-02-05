const calcularPorRondas = (personas) =>{
    const n = personas.length;
    if (n === 0) return {
        total: 0,
        promedioPorPersona: 0,
        rondas: [],
        balanceFinal: []
    };

    //paso 1: calcular el total general

    const totalGastado = personas.reduce ((sum,p) => sum + p.gasto, 0);
    const promedioPorPersona = Math.round(totalGastado / n);


    //paso 2: inicializar saldos (empieza en 0)

    const personasConSaldo = personas.map (p => ({
        nombre: p.nombre,
        gasto: p.gasto,
        saldo: 0
    }));

    // paso 3: generar rondas 

    const rondas = [];

    personasConSaldo.forEach(pagador =>{
        //solo procesar si esta persona gasto

        if (pagador.gasto <= 0) return;

        //cuanto debe pagar cada uno en esta ronda 
        const montoPorPersona = Math.round(pagador.gasto / n);

        const pagosPorRonda = [];
        const saldosAntesRonda = personasConSaldo.map (p => ({
            nombre: p.nombre,
            saldo: p.saldo
        }));

        //cada persona incluyendo el pagador paga su parte


        personasConSaldo.forEach(persona => {
            pagosPorRonda.push ({
                quien: persona.nombre,
                paga: montoPorPersona,
                a: pagador.nombre
            });

            //actualizar saldos

            if (persona.nombre === pagador.nombre){
                //el pagador recibe de todos incluyendose a si mismo

                persona.saldo += (montoPorPersona * n) - pagador.gasto;
            } else {
                //los demas pagan
                persona.saldo -= montoPorPersona;
            }
        });

        rondas.push ({
            pagador: pagador.nombre,
            gastoTotal: pagador.gasto,
            montoPorPersona: montoPorPersona,
            pagos: pagosPorRonda,
            saldosAntes: saldosAntesRonda,
            saldosDespues: personasConSaldo.map(p => ({
                nombre: p.nombre,
                saldo: p.saldo
            }))
        });
    });

    return {
        total: totalGastado,
        promedioPorPersona: promedioPorPersona,
        rondas: rondas,
        balanceFinal: personasConSaldo.map(p =>({
            nombre: p.nombre,
            saldo: p.gasto
        }))
    };

 };


 export {calcularPorRondas};