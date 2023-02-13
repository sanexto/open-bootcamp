import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ComponenteEstado = () => {

    const [puntos, setPuntos] = useState(0);

    useEffect(() => {
        obtenerUsuario();
    }, [ puntos ]);

    const obtenerUsuario = () => {
        return axios.get('https://randomuser.me/api').then((response) => {

            if (response.status === 200) {

                console.log(JSON.stringify(response.data));

            } else {

                throw new Error('Error al obtener el usuario aleatorio');

            }
        
        }).catch((e) => console.error(`[Error]: ${e}`));
    };

    const sumarPuntos = () => {

        setPuntos(puntos + 1);

    };

    return (
        <div>
            <h2>Puntuación: { puntos }</h2>
            <button onClick={ sumarPuntos }>Sumar puntos</button>
        </div>
    );
}

export default ComponenteEstado;
