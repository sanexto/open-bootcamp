// Obtener todos los usuarios de la página 1
export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);
    // We return the json
    return response.json();
};

// Obtener todos los usuarios de una página en concreto
export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);
    // We return the json
    return response.json();
};

// Obtener los detalles de un usuario
export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);
    // We return the json
    return response.json();
};

// Hacer login
export const login = async (email, password) => {

    /**
     * Definimos el body (cuerpo) de nuestra
     * petición HTTP
     */
    let body = {
        email,
        password,
    };

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        // mode: 'no-cors',
        credentials: 'omit', // para que no tenga en cuenta las credenciales
        cache: 'no-cache', // no queremos cachear las respuestas
        headers: { // modificamos las cabeceras de la petición
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?', response.ok);
    // We return the json
    return response.json();

};