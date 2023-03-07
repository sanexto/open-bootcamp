// Async Action Types

// Acción despachada cuando se hace el login
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; // Watcher Saga listens
// Acción despachada cuando el login es exitoso
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; // Dispached by Worker Saga
// Acción despachada cuando el login NO es exitoso
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; // Dispached by Worker Saga

export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: { // configuración de la petición HTTP
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email,
                    password,
                },
            },
            successAction: API_CALL_SUCCESS, // acción a despachar si el login es exitoso
            failureAction: API_CALL_FAILURE, // acción a despachar si el login no es exitoso
        },
    };
};

/**
 * Generic HttpRequest Action dispatcher
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: { // configuración de la petición HTTP
                method,
                url,
                data,
            },
            successAction: API_CALL_SUCCESS, // acción a despachar si la petición es exitosa
            failureAction: API_CALL_FAILURE, // acción a despachar si la petición no es exitosa
        },
    };
};