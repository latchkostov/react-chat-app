import React, { FunctionComponent } from 'react';
import MessageAvatar from './message-avatar.component';
import styled from 'styled-components';
import { RootState } from '../../redux/root.state';
import { User } from '../../redux/users/user';
import { selectUserByUsername } from '../../redux/users/users.selectors';
import { connect } from 'react-redux';

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
    username?: string,
    user?: User,
    lastMessage?: string
}

const MessageField: FunctionComponent<MessageFieldProps> = ({user, lastMessage}) => {
    const numMessages = 0;
    const messageLabel = numMessages ? numMessages : ' ';
    const name = user ? `${user.firstName} ${user.lastName}` : '';

    return (
        <div>
            { user ? 
                <Wrapper>
                    <AvatarAndNameContainer style={{width: numMessages ? '85%' : '100%'}}>
                        <MessageAvatar imgSrc={'avatarSrc'} name={name} userStatus={user.status} />
                        <NameAndRecentMessageContainer>
                            <NameContainer><span>{name}</span></NameContainer>
                            <MostRecentMessageContainer>{lastMessage}</MostRecentMessageContainer>
                        </NameAndRecentMessageContainer>
                    </AvatarAndNameContainer>
                    <NumMessagesContainer style={{
                        backgroundColor: numMessages ? 'red' : 'unset',
                        display: numMessages ? 'block' : 'none'
                    }}>{messageLabel}</NumMessagesContainer>
                </Wrapper> : null
            }
        </div>
    );
};

const mapStateToProps = (state: RootState, ownProps: MessageFieldProps): MessageFieldProps => {
    const username = ownProps.username ? ownProps.username : '';
    return { 
        username: username,
        user: selectUserByUsername(username)(state)
    };
}

export default connect(mapStateToProps, null)(MessageField);