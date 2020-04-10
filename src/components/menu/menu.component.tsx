import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import Notifications from '@material-ui/icons/Notifications';
import Chat from '@material-ui/icons/Chat';
import Group from '@material-ui/icons/Group';
import HelpOutline from '@material-ui/icons/HelpOutline';
import styled from 'styled-components';
import MenuItem, { MenuItemProps } from './menu-item.component';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

const topListItems: MenuItemProps[] = [
  {
    linkTo: '/notifications', text: 'Notifications', Icon: Notifications
  },
  {
    linkTo: '/direct_messages', text: 'Direct Messages', Icon: Chat
  },
  {
    linkTo: '/channels', text: 'Channels', Icon: Group
  }
]

const Menu: FunctionComponent<any> = (props: any) => {
    return (
      <Wrapper>
        <List>
          {
            topListItems.map((item, idx) => 
              <MenuItem key={idx} linkTo={item.linkTo} text={item.text} Icon={item.Icon} menuItemKey={idx} /> 
            )
          }
        </List>
        <List>
          <MenuItem linkTo='/help' text='Help' Icon={HelpOutline} menuItemKey={1} /> 
        </List>
      </Wrapper>
    );
}

export default Menu;