import { User } from "./user";

export interface UsersState {
    users: Map<string, User>;
}
