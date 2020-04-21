import { DirectMessage } from "./direct-message";

export interface DirectMessagesState {
    messages: Map<string, DirectMessage[]>;
}