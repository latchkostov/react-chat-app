export const DirectMessagesActionTypes = {
    ADD_DIRECT_MESSAGE: 'ADD_DIRECT_MESSAGE',
    MARK_USER_MESSAGES_READ: 'MARK_USER_MESSAGES_READ'
};

export const addDirectMessage = (dm: any) => ({
    type: DirectMessagesActionTypes.ADD_DIRECT_MESSAGE,
    payload: dm
});

export const markUserMessagesRead = (userId: string) => ({
    type: DirectMessagesActionTypes.MARK_USER_MESSAGES_READ,
    payload: userId
});