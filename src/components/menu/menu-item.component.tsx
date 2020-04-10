import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';

export interface MenuItemProps {
    linkTo: string;
    Icon: any;
    text: string;
    menuItemKey?: number;
}

const MenuItem: FunctionComponent<MenuItemProps> = (props: MenuItemProps) => {
    const { linkTo, Icon, text, menuItemKey } = props;
    const key = menuItemKey !== undefined ? menuItemKey : text;
    return (
        <div>
        <Link to={linkTo}>
            <ListItem button key={key}>
                <ListItemIcon><Icon /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
        </div>
    )
}

export default MenuItem;