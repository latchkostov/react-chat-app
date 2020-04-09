import React from 'react';
import './App.css';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText, AppBar, Drawer } from '@material-ui/core';
import Notifications from '@material-ui/icons/Notifications';
import Chat from '@material-ui/icons/Chat';
import Group from '@material-ui/icons/Group';
import HelpOutline from '@material-ui/icons/HelpOutline';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      flexGrow: 1
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
      height: '100%'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    drawerServerName: {
      textAlign: 'center',
      marginTop: '2rem',
      marginBottom: '0.5rem'
    },
    listsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '85%'
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            WeChat
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Typography variant='h4' className={classes.drawerServerName}>Server</Typography>
          <div className={classes.listsContainer}>
            <List>
              <ListItem button key='notifications'>
                <ListItemIcon><Notifications></Notifications></ListItemIcon>
                <ListItemText primary='Notifications' />
              </ListItem>
              <ListItem button key='chat'>
                <ListItemIcon><Chat></Chat></ListItemIcon>
                <ListItemText primary='Direct Messages' />
              </ListItem>
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
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero eveniet esse molestiae quaerat ipsum aperiam neque, recusandae vitae in dolorem et tenetur nam sunt quidem. Saepe optio qui facere.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum eum aliquam adipisci excepturi, architecto vero itaque laboriosam sit, blanditiis maxime totam dignissimos sunt. Sint similique non praesentium error dolores.
        </Typography>
      </main>
    </div>
  );
}


export default App;
