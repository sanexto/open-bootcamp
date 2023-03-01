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