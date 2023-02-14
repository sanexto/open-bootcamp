import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log('Actualización del componente');
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = 'Tiempo detenido';
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            AllCycles
        </div>
    );
}

export default AllCycles;
