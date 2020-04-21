import React, { FunctionComponent } from 'react';
import MessageField from '../message-field/message-field.component';
import styled from 'styled-components';
import { DirectMessage } from '../../redux/direct-messages/direct-message';
import { RootState } from '../../redux/root.state';
import { selectDirectMessages } from '../../redux/direct-messages/direct-messages.selectors';
import { connect } from 'react-redux';

const MessageFieldWrapper = styled.div`
`;

interface DirectMessagesProps {
    directMessages?: Map<string, DirectMessage[]> | null;
}

const DirectMessages: FunctionComponent<DirectMessagesProps> = (props: DirectMessagesProps) => {
    const fromUsers = props.directMessages ? Array.from(props.directMessages.keys()) : [];
    return (
        <div>
            {fromUsers.map(fromUser => {
                const messages = props.directMessages
                    ? props.directMessages.get(fromUser) : [];
                return <MessageFieldWrapper key={fromUser}>
                    <MessageField username={fromUser} lastMessage={messages ? messages[messages.length-1].message : ''} />
                </MessageFieldWrapper>
            })}
        </div>
    );
}

const mapStateToProps = (state: RootState): DirectMessagesProps => {
    return { 
        directMessages: selectDirectMessages(state)
    };
}

export default connect(mapStateToProps, null)(DirectMessages);