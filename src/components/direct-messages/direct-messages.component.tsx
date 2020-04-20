import React, { FunctionComponent } from 'react';
import MessageField from '../message-field/message-field.component';
import { UserStatus } from '../message-field/message-avatar.component';
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
    console.log(props.directMessages)
    return (
        <div>
            <MessageFieldWrapper>
                <MessageField name={'Latchezar Kostov'}
                    numMessages={0} userStatus={UserStatus.Online}>
                </MessageField>
            </MessageFieldWrapper>
            <MessageFieldWrapper>
                <MessageField name={'Bonnie Nguyen'}
                    numMessages={10} userStatus={UserStatus.Away}>
                </MessageField>
            </MessageFieldWrapper>
            <MessageFieldWrapper>
                <MessageField name={'Maya Kostova'}
                    numMessages={0} userStatus={UserStatus.Busy}>
                </MessageField>
            </MessageFieldWrapper>
        </div>
    );
}

const mapStateToProps = (state: RootState): DirectMessagesProps => {
    return { 
        directMessages: selectDirectMessages(state)
    };
}

export default connect(mapStateToProps, null)(DirectMessages);