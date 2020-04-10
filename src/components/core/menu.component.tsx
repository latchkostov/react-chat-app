import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import Notifications from '@material-ui/icons/Notifications';
import Chat from '@material-ui/icons/Chat';
import Group from '@material-ui/icons/Group';
import HelpOutline from '@material-ui/icons/HelpOutline';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

const Menu: FunctionComponent<any> = (props: any) => {
    return (
      <Wrapper>
        <List>
          <Link to="/notifications">
            <ListItem button key='notifications'>
              <ListItemIcon><Notifications></Notifications></ListItemIcon>
              <ListItemText primary='Notifications' />
            </ListItem>
          </Link>
          <Link to="/direct_messsages">
            <ListItem button key='chat'>
                <ListItemIcon><Chat></Chat></ListItemIcon>
                <ListItemText primary='Direct Messages' />
            </ListItem>
          </Link>
          <ListItem button key='channels'>
            <ListItemIcon><Group></Group></ListItemIcon>
            <ListItemText primary='Channels' />
          </ListItem>
        </List>
        <List>
          <ListItem button key='help'>
            <ListItemIcon><HelpOutline /></ListItemIcon>
            <ListItemText primary='Help' />
          </ListItem>
        </List>
      </Wrapper>
    );
}

export default Menu;