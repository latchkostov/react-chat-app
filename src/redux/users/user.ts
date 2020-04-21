import { UserStatus } from "../../components/message-field/message-avatar.component";

export interface User {
    username: string;
    firstName: string;
    lastName: string;
    status: UserStatus;
}