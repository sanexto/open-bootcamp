/**
 * Ejemplo de componente de tipo clase con todos los
 * métodos del cicla de vida de un componente
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    /**
     * Inicializacion de variables y estados 
     */
    constructor(props) {
        super(props);
        console.log('constructor: Cuando se instancia el componente');
    }

    componentWillMount() {
        console.log('WillMount: Antes del montaje del componente');
    }

    /**
     * Se realizan peticiones HTTP para traer datos, antes de pintar (renderizar)
     * el componente
     */
    componentDidMount() {
        console.log('DidMount: Despues del montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse');
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;

