import React, { FunctionComponent } from 'react';
import MessageAvatar from './message-avatar.component';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
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
`;

const MessageField: FunctionComponent<any> = ({name}) => {
    return (
        <Wrapper>
            <MessageAvatar />
            <NameContainer><span>{name}</span></NameContainer>
        </Wrapper>
    );
};

export default MessageField;