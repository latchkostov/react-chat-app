import React, { FunctionComponent } from 'react';
import MessageAvatar, { UserStatus } from './message-avatar.component';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
`;

const AvatarAndNameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    font-size: 1.1rem;
    padding-left: 0.4rem;
    cursor: pointer;
`;

const NameContainer = styled.div`
    margin-left: 0.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const NumMessagesContainer = styled.div`
    width: 20%;
    margin-left: 5px;
    color: white;
    border-radius: 4px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.15rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

interface MessageFieldProps {
    name?: string;
    avatarSrc?: string;
    userStatus?: UserStatus;
}

const MessageField: FunctionComponent<any> = ({name, avatarSrc, userStatus, numMessages}) => {
    const messageLabel = numMessages ? numMessages : ' ';
    return (
        <Wrapper>
            <AvatarAndNameContainer>
                <MessageAvatar imgSrc={avatarSrc} name={name} userStatus={userStatus} />
                <NameContainer><span>{name}</span></NameContainer>
            </AvatarAndNameContainer>
            <NumMessagesContainer style={{backgroundColor: numMessages ? 'red' : 'unset'}}>{messageLabel}</NumMessagesContainer>
        </Wrapper>
    );
};

export default MessageField;