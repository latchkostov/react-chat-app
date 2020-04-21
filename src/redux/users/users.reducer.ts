import { UsersState } from "./users.state";
import { User } from "./user";
import { UserStatus } from "../../components/message-field/message-avatar.component";
import { UsersActionTypes } from "./users.actions";

const INITIAL_STATE: UsersState = {
    users: new Map<string, User>([
        ['blgrnboy', {username: 'blgrnboy', firstName: 'Latchezar', lastName: 'Kostov', status: UserStatus.Online}],
        ['user2', {username: 'user2', firstName: 'Bonnie', lastName: 'Nguyen', status: UserStatus.Away}],
        ['user3', {username: 'user3', firstName: 'Maya', lastName: 'Kostova', status: UserStatus.Busy}]
    ])
};

const usersReducer = (state: UsersState = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case UsersActionTypes.ADD_USER:
            return {
                ...state,
                users: state.users.set(action.payload.user.username, action.payload.user)
            };
        case UsersActionTypes.REMOVE_USER:
            return {
                ...state,
                users: state.users.delete(action.payload.user.username)
            };
        case UsersActionTypes.SET_USERS:
            return {
                ...state,
                users: new Map<string, User>(action.payload.users)
            };
        default:    
            return state;
    }
};

export default usersReducer;