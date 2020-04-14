import React, { FunctionComponent } from 'react';
import { Avatar, Badge, makeStyles } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';


const useStyles = makeStyles({
    badge: (props: StatusBadgeStyleProps) => ({
        color: props.color,
        backgroundColor: props.color,
        border: '1px solid white',
        boxShadow: '2px 2px 6px #000000'
    }),
});

interface MessageAvatarProps {
    imgSrc?: string;
    name?: string;
    userStatus: UserStatus
}

export enum UserStatus {
    Online,
    Away,
    Busy,
    Offline
}

interface StatusBadgeStyleProps {
    backgroundColor: string,
    color: string
}

const createStyleProps = (color: string) => {
    const result: StatusBadgeStyleProps = {
        backgroundColor: color,
        color: color
    };
    return result;
}

const MessageAvatar: FunctionComponent<MessageAvatarProps> = ({imgSrc, name, userStatus}) => {
    let styleProps: StatusBadgeStyleProps;

    switch (userStatus) {
        case UserStatus.Online:
            styleProps = createStyleProps('#44b700');
            break;
        case UserStatus.Away:
            styleProps = createStyleProps('#ffb900');
            break;
        case UserStatus.Busy:
            styleProps = createStyleProps('#cc4304');
            break;
        case UserStatus.Offline:
            styleProps = createStyleProps('gray');;
            break;
        default:
            styleProps = createStyleProps('gray');
            break;
    }
    
    const classes = useStyles(styleProps);
    const fallBack = name ? name[0].toUpperCase() : <AccountCircle />;
    
    return (
        <div>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
                classes={{
                    badge: classes.badge
                }}
            >
                <Avatar src={imgSrc}>
                    {fallBack}
                </Avatar>
            </Badge>
        </div>
    );
};

export default MessageAvatar;