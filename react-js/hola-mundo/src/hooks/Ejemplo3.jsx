/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';


/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

/**
 * Inicializamos un contexto vacio
 */
const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: { state.token }</h1>
            {/* Pintamos el componente 2 */}
            <Componente2 />
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesión es: { state.session }</h2>
        </div>
    );
}


const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234557',
        session: 1,
    };

    // Creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                session: sessionData.session + 1,
            }
        );
    }

    return (
        <miContexto.Provider value={ sessionData }>
            {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
            {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
            <h1>*** Ejemplo de useState() y useContext() ***</h1>
            <Componente1 />
            <button onClick={ actualizarSesion }>Actualizar sesión</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;

