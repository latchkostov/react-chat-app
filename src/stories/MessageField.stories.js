import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import MessageField from '../components/message-field/message-field.component';
import girl from '../images/avatars/girl.png';
import { UserStatus } from '../components/message-field/message-avatar.component';

export default {
    title: 'MessageField',
    component: MessageField,
    decorators: [withKnobs]
};

const options = {
    range: true,
    min: 0,
    max: 3,
    step: 1,
 };

export const DefaultStory = () => {
    return (
        <div style={{ maxWidth: '200px'}}>
            <MessageField name={text('Name', 'Bonnie Nguyen')} avatarSrc={text('Avatar Src', girl)} 
                userStatus={number('User Status', 0, options)}>
            </MessageField>
        </div>
    )
};