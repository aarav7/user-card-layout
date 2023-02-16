import React from 'react';

const UserContext = React.createContext(
    {
        users: [],
        isLoading: false,
        error: null,
        getUsers: () => { },
        gotUsers: (users) => { },
        errors: (msg) => { }
    }
);

export default UserContext;
