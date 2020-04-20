import { combineReducers } from 'redux';
import directMessagesReducer from './direct-messages/direct-messages.reducer';

const rootReducer = combineReducers({
    directMessages: directMessagesReducer
});

export default rootReducer;