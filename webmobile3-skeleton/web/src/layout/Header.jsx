import React, { useContext } from "react";
import {
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { CommonContext } from "../context/CommonContext";
import LoginPage from '../pages/LoginPage';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { ButtonDropdown } from "reactstrap";

const useStyles = makeStyles(theme => ({
  appBar: {
    // padding: `0 calc(10px + 2vw)`
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    cursor: "pointer"
  }
}));

const Header = props => {
  const classes = useStyles();
  const {} = useContext(CommonContext);

  const onClickDrawerOpenHandler = () => {
    alert("open Drawer");
  };

  const onClickSignInDialogOpenHandler = () => {
    alert("open signIn Dialog");
    
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <ButtonDropdown
          color="inherit"
          aria-label="open drawer"
          onClick={onClickDrawerOpenHandler}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon>
            <MenuItem>hmmmm....</MenuItem>
            <MenuItem>hmmmm....</MenuItem>
            <MenuItem>hmmmm....</MenuItem>
          </MenuIcon>

        </ButtonDropdown>
        <Typography variant="h6" className={classes.title} >
          <Link to ='/'>
          VoteOn
          </Link>
        </Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={onClickSignInDialogOpenHandler}
          color="inherit"
          size="medium"
        >
          <Link to='/login'>
          <AccountCircle />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
