import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Drawer } from '@material-ui/core';
import Menu from './components/menu/menu.component';
import DirectMessages from './components/direct-messages/direct-messages.component';
import RightPane from './components/right-panel/right-pane.component';

const drawerWidth = 350;

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
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
    },
    content: {
      height: `calc(100vh)`,
      width: '100%'
    },
    menuAndRouterContainer: {
      display: 'flex',
      height: '100%'
    },
    listsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRight: '1px solid #eee',
      width: '30%'
    },
    routerContainer: {
      flexGrow: 1,
      textAlign: 'center',
      width: '70%',
      marginTop: '2rem'
    }
  }),
);

function App() {
  const classes = useStyles();

  const NotificationsPage = lazy(() => import('./components/notifications.component'));

  return (
    <Router>
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
          <div className={classes.menuAndRouterContainer}>
            <div className={classes.listsContainer}>
              <Menu />
            </div>
            <div className={classes.routerContainer}>
              <Suspense fallback={'loading'}>
                <Switch>
                  <Route exact path='/notifications' component={NotificationsPage} />
                </Switch>
                <Switch>
                <Route exact path='/direct_messages' component={DirectMessages} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <RightPane>
        </RightPane>
      </main>
    </div>
    </Router>
  );
}

export default App;
