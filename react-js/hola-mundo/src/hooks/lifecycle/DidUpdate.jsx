/**
 * Ejemplo de uso del metodo componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */


import React, { Component, useEffect } from 'react';


export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevas props o cuando cambia el estado privado del componente');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevas props o cuando cambia el estado privado del componente');
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}

