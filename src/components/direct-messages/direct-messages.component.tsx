import React, { FunctionComponent } from 'react';
import MessageField from '../message-field/message-field.component';
import { UserStatus } from '../message-field/message-avatar.component';
import styled from 'styled-components';

const MessageFieldWrapper = styled.div`
    &:first-child {
        border-top: 2px solid #eee;
    }
    margin-bottom: 2px;
    margin-right: 1px;
    box-shadow: 0 1px 3px #3d3d3d;
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