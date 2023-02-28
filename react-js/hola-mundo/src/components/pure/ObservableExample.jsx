import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscription to Observable');
        getNumbers.subscribe({
            /**
             * función que se llama cuando el observable
             * emite un nuevo valor
             */
            next(newNumber) {
                console.log('New Number:', newNumber);
                setNumber(newNumber);
            },
            /**
             * función que se llama cuando ocurre algún
             * error
             */
            error(error) {
                alert(`Something went wrong ${error}`);
                console.log('Error in observable');
            },
            /**
             * función que se llama cuando el observable
             * se completa o termina (no se emiten mas valores)
             */
            complete() {
                alert(`Finished with: ${number}`);
                console.log('Done with the observable');
            }
        });

    };

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>
                Obtain new Numbers
            </button>
        </div>
    );

}

export default ObservableExample;
