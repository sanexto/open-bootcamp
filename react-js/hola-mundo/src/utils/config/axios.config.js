import axios from 'axios';

// Default config for AXIOS
export default axios.create(
    {
        // URL base para nuestras peticiones
        baseURL: 'https://randomuser.me/api',
        /**
         * JSON porque el endpoint nos responde
         * con un JSON
         */
        responseType: 'json',
        /**
         * Peticiones que demoran mas de 6 segundos
         * se cancelan
         */
        timeout: 6000,
    }
);