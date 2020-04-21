import { DirectMessagesState } from "./direct-messages/direct-messages.state";
import { UsersState } from "./users/users.state";

export interface RootState {
    directMessages: DirectMessagesState,
    users: UsersState
}
