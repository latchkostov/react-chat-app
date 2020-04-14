import React, { FunctionComponent } from 'react';
import girl from '../../images/avatars/girl.png'
import styled from 'styled-components';

const ImgWrapper = styled.img`
    height: 50px;
    width: 50px;
`;
const MessageAvatar: FunctionComponent<any> = () => {
    return (
        <ImgWrapper src={girl} alt="girl avatar" />
    )
};

export default MessageAvatar;