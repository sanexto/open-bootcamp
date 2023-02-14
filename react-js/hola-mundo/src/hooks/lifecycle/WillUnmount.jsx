/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso de hooks para componente funcional
 * (Cuando al componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react';


export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}

