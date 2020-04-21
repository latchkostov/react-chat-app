import { createSelector } from 'reselect';
import { RootState } from '../root.state';

const selectUsersState = (state: RootState) => {
    return state.users;
}

export const selectUserByUsername = (username: string) => createSelector(
    [selectUsersState],
    (state) => state.users.get(username)
);