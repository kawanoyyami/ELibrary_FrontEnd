/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './_styles';
import { logout } from '../../Services/Auth/Login';
import { mainListItems, secondaryListItems } from './menu';
import { getRoles } from '../../Services/Auth/SessionParser';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  const { children } = props;
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={clsx(classes.title, open && classes.titleHidden)}
          >
            ELibrary
          </Typography>
          <div className={classes.exitButton}>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Typography className={classes.menuText}>
                User Role: {getRoles()}
              </Typography>
              <Divider />
              <MenuItem
                onClick={() => {
                  history.push('/Profile');
                }}
              >
                My account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout();
                  history.push('/SignIn');
                }}
              >
                Logout
              </MenuItem>
            </Menu>
            <Button color="inherit" onClick={handleClick}>
              <AccountCircleIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            ELibrary
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      {children}
    </div>
  );
}
