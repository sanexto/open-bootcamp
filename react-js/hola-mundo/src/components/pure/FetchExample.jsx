import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);

    useEffect(() => {
        /**
         * Obtenemos los usuarios antes de que
         * se pinte el componente, al iniciarse
         * el componente.
         */
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All Users', response.data);
                // Actualizamos la lista de usuarios
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            });
    };

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All Paged Users', response.data);
                // Actualizamos la lista de usuarios
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            });
    };

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('User:', response.data);
                setSelectedUser(response.data);
            })
            .catch((error) => {
                alert(`Error while retreiving the user: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining user:');
                console.table(selectedUser);
            });
    };

    return (
        <div>
            <h2>
                Users:
            </h2>
            {/* Mostramos la lista de usuarios */}
            {users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>
            ))}
            <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            {selectedUser && (
                <div>
                    <h3>
                        User Details
                    </h3>
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Last Name: {selectedUser.last_name}</p>
                    <p>Email: {selectedUser.email}</p>
                    <img alt='Avatar' src={selectedUser.avatar} style={{height: '50px', width: '50px'}} />
                </div>
            )}
        </div>
    );

}

export default FetchExample;
