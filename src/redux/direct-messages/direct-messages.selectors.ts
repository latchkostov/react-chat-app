import { createSelector } from 'reselect';
import { RootState } from '../root.state';

const selectDirectMessagesState = (state: RootState) => {
    return state.directMessages;
}

export const selectDirectMessages = createSelector(
    [selectDirectMessagesState],
    (state) => state.messages
);