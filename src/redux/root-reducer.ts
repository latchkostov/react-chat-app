import { combineReducers } from 'redux';
import directMessagesReducer from './direct-messages/direct-messages.reducer';
import usersReducer from './users/users.reducer';

const rootReducer = combineReducers({
    directMessages: directMessagesReducer,
    users: usersReducer
});

export default rootReducer;