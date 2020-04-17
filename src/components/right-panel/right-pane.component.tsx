import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import ChatOutput from '../chat-output/chat-output.component';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 24px);
`;

const HeaderWrapper = styled.div`
    height: 10%;
    width: 100%;
`;

const ChatOutputWrapper = styled.div`
    height: 80%;
    width: 100%;
`;

const FooterWrapper = styled.div`
    height: 10%;
    width: 100%;
`;

const RightPane: FunctionComponent<any> = (props: any) => {
    return (
        <Wrapper>
            <HeaderWrapper>
                Some channel name
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