/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unneeded-ternary */
import React, { useMemo, useState } from 'react';

import { NavLink, useHistory, withRouter } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
  Button,
} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import RemoveFromQueueSharpIcon from '@material-ui/icons/RemoveFromQueueSharp';
import NavBarRoutes from './NavBarRoutes';
import { logout } from '../../Services/Auth/Login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
  })
);

const NavigationBar: React.FC = (props: any) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  // eslint-disable-next-line arrow-body-style
  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ELibrary
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                logout();
                history.push('/SignIn');
              }}
            >
              <Badge color="secondary" variant="dot">
              <Typography>Logout</Typography>
              </Badge>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <br />
          <Typography variant="h5" align="center" color="textSecondary">
            Menu
          </Typography>

          <MenuList>
            <hr />
            {NavBarRoutes.map((prop, key) => {
              return (
                <NavLink
                  to={prop.path}
                  style={{ textDecoration: 'none' }}
                  key={key}
                >
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(NavigationBar);
