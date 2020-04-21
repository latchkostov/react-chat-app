export const UsersActionTypes = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER',
    SET_USERS: 'SET_USERS'
};

export const addUser = (user: any) => ({
    type: UsersActionTypes.ADD_USER,
    payload: user
});

export const removeUser = (user: any) => ({
    type: UsersActionTypes.REMOVE_USER,
    payload: user
});

export const setUsers = (users: any) => ({
    type: UsersActionTypes.SET_USERS,
    payload: users
});