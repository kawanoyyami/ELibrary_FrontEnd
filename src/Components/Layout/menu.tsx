import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem key="homepage" id="homepage" button component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home page" />
    </ListItem>
    <ListItem key="books" id="books" button component={Link} to="/Books">
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Books" />
    </ListItem>
    <ListItem key="author" id="author" button component={Link} to="/Auhtors">
      <ListItemIcon>
        <LocalLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Search Authors" />
    </ListItem>
    <ListItem key="profile" id="profile" button component={Link} to="/Profile">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="My account" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset> </ListSubheader>
    <ListItem button component={Link} to="/Subscription">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Subscription" />
    </ListItem>
  </div>
);
