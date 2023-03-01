import APIRequest from '../utils/config/axios.config';

// Obtener usuario aleatorio
export function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    }); // https://randomuser.me/api/
}