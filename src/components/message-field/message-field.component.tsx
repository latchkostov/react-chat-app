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
    align-items: center;
    font-size: 1.1rem;
    padding-left: 0.4rem;
    cursor: pointer;
`;

const NameAndRecentMessageContainer = styled.div`
    text-align: left;
    margin-left: 1.0rem;
    overflow: hidden;
`;

const NameContainer = styled.div`
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const NumMessagesContainer = styled.div`
    margin-left: 5px;
    color: white;
    border-radius: 4px;
    text-align: center;
    font-size: 0.6rem;
    font-weight: 600;
    padding: 0.125rem 0.3rem;
    overflow: hidden;
    white-space: nowrap;
`;

const MostRecentMessageContainer = styled.div`
    font-size: 12px;
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
            <AvatarAndNameContainer style={{width: numMessages ? '80%' : '100%'}}>
                <MessageAvatar imgSrc={avatarSrc} name={name} userStatus={userStatus} />
                <NameAndRecentMessageContainer>
                    <NameContainer><span>{name}</span></NameContainer>
                    <MostRecentMessageContainer>You: Hello friend!</MostRecentMessageContainer>
                </NameAndRecentMessageContainer>
            </AvatarAndNameContainer>
            <NumMessagesContainer style={{
                backgroundColor: numMessages ? 'red' : 'unset',
                display: numMessages ? 'block' : 'none'
            }}>{messageLabel}</NumMessagesContainer>
        </Wrapper>
    );
};

export default MessageField;