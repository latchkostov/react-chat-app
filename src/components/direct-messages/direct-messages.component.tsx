import React, { FunctionComponent } from 'react';
import MessageField from '../message-field/message-field.component';
import { UserStatus } from '../message-field/message-avatar.component';
import styled from 'styled-components';

const MessageFieldWrapper = styled.div`
`;

const DirectMessages: FunctionComponent<any> = (props: any) => {
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

export default DirectMessages;