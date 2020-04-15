import React, { FunctionComponent } from 'react';
import MessageAvatar, { UserStatus } from './message-avatar.component';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
`;

const NameContainer = styled.div`
    font-size: 1.1rem;
    padding-left: 0.4rem;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

interface MessageFieldProps {
    name?: string;
    avatarSrc?: string;
    userStatus?: UserStatus;
}

const MessageField: FunctionComponent<any> = ({name, avatarSrc, userStatus}) => {
    return (
        <Wrapper>
            <MessageAvatar imgSrc={avatarSrc} name={name} userStatus={userStatus} />
            <NameContainer><span>{name}</span></NameContainer>
        </Wrapper>
    );
};

export default MessageField;