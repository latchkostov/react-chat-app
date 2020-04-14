import React from 'react';
import { action } from '@storybook/addon-actions';
import MessageField from '../components/message-field/message-field.component';
import girl from '../images/avatars/girl.png';
import { UserStatus } from '../components/message-field/message-avatar.component';

export default {
    title: 'MessageField',
    component: MessageField,
};

export const AvatarWithNoImageWithName = () => {
    return <MessageField name='Bonnie Nguyen'></MessageField>
};

export const AvatarWithImageAndWithName = () => {
    return <MessageField name='Bonnie Nguyen' avatarSrc={girl}></MessageField>
};

export const AvatarWithImageAndWithNameOnline = () => {
    return <MessageField name='Bonnie Nguyen' avatarSrc={girl} userStatus={UserStatus.Online}></MessageField>
};

export const AvatarWithImageAndWithNameAway = () => {
    return <MessageField name='Bonnie Nguyen' avatarSrc={girl} userStatus={UserStatus.Away}></MessageField>
};

export const AvatarWithImageAndWithNameBusy = () => {
    return <MessageField name='Bonnie Nguyen' avatarSrc={girl} userStatus={UserStatus.Busy}></MessageField>
};

export const AvatarWithImageAndWithNameOffline = () => {
    return <MessageField name='Bonnie Nguyen' avatarSrc={girl} userStatus={UserStatus.Offline}></MessageField>
};