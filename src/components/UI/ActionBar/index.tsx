import React, { FC } from "react";
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles';

interface ActionBarProps {
  handleDrawerToggle: () => void;
  children?: React.ReactNode;
}

const ActionBar :FC<ActionBarProps> = ({ handleDrawerToggle, children }) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="transparent" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
      </AppBar>
    )
}

export default ActionBar;
