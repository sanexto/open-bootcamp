/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y del hook de ciclo de vida
 * en componente funcional
 */


import React, { Component, useEffect } from 'react';


export class DidMount extends Component {

    /**
     * Toda operación asincrona debe realizarse aquí.
     * Por ejemplo realizar una peticion HTTP para solicitar datos, etc.
     */
    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea renderizado (pintado)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea renderizado (pintado)');
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

