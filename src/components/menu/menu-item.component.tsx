import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface MenuItemProps {
    linkTo: string;
    Icon: any;
    text: string;
    onCustomClick?: any;
    menuItemKey?: number;
}

const useStyles = makeStyles({
    root: {
        minWidth: '0px'
    }
});

const MenuItem: FunctionComponent<MenuItemProps> = (props: MenuItemProps) => {
    const classes = useStyles();
    const { linkTo, Icon, text, menuItemKey, onCustomClick } = props;
    const key = menuItemKey !== undefined ? menuItemKey : text;
    return (
        <div>
            <ListItem button key={key} onClick={() => onCustomClick(linkTo)}>
                <ListItemIcon classes={{root: classes.root}}><Icon /></ListItemIcon>
            </ListItem>
        </div>
    )
}

export default MenuItem;