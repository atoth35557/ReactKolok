import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    height:'100%'
  },
}));

 function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SideNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="/">
          <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink href="/users">
          <ListItemText primary="Users" />
        </ListItemLink>
        <ListItemLink href="/about">
          <ListItemText primary="About Us" />
        </ListItemLink>
        <ListItemLink href="/test">
          <ListItemText primary="Test Us" />
        </ListItemLink>
      </List>
    </div>
  );
}