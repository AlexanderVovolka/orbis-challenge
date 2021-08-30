import React, { FC, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

import ActionBar from "../UI/ActionBar";
import StocksSearch from "../Forms/StocksSearch";

import makeStyles from "./styles";

const PageLayout: FC = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = makeStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Avatar classes={{ colorDefault: classes.avatar }} children={"AV"} />
    </div>
  );

  return (
    <div className={classes.root}>
      <ActionBar handleDrawerToggle={handleDrawerToggle}>
        <StocksSearch />
      </ActionBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Container>
          <div>{children}</div>
        </Container>
      </main>
    </div>
  );
};

export default PageLayout;
