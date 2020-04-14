import React from 'react';
import { action } from '@storybook/addon-actions';
import MessageField from '../components/message-field/message-field.component';

export default {
    title: 'MessageField',
    component: MessageField,
};

export const AvatarWithName = () => (
    <MessageField name='Bonnie Nguyen'></MessageField>
);