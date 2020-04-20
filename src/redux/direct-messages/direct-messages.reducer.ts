import { DirectMessagesState } from "./direct-messages.state";
import { DirectMessage } from "./direct-message";
import { DirectMessagesActionTypes } from "./direct-messages.actions";

const sampleDm: DirectMessage = {
    messageId: '123',
    message: 'Hello friend!'
}

const INITIAL_STATE: DirectMessagesState = {
    messages: new Map<string, DirectMessage[]>([
        ['blgrnboy', [sampleDm]]
    ])
};

const directMessagesReducer = (state: DirectMessagesState = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case DirectMessagesActionTypes.ADD_DIRECT_MESSAGE:
            let messages = state.messages?.get(action.payload.userId);
            if (messages) {
                messages.push(action.payload.userId)
            } else {
                messages = [action.payload.userId];
            }
            return {
                ...state,
                messages: state.messages?.set(action.payload.userId, messages)
            }

        default:    
            return state;
    }
};

export default directMessagesReducer;