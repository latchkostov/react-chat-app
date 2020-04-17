import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import ChatOutput from '../chat-output/chat-output.component';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 64px);
    padding: 0rem 1rem 1rem 1rem;
    background-color: #eee;
`;

const HeaderWrapper = styled.div`
    height: 2rem;
    width: 100%;
`;

const ChatOutputWrapper = styled.div`
    height: 90%;
    width: 100%;
`;

const FooterWrapper = styled.div`
    height: 10%;
    width: 100%;
    background-color: #d2d2d2;
`;

const RightPane: FunctionComponent<any> = (props: any) => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <Typography variant='h5'>#Javascript Experts</Typography>
            </HeaderWrapper>
            <ChatOutputWrapper>
                <ChatOutput></ChatOutput>
            </ChatOutputWrapper>
            <FooterWrapper>
                Footer
            </FooterWrapper>
        </Wrapper>
    );
}

export default RightPane;