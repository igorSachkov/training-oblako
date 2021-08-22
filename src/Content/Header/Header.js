import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import BreadCrump from './BreadCrump';
import  ModalWindowAdd  from './ModalWindowAdd';
import hamburgerButton from "./../../icons/hamburger-button.png"
import planning from "./../../icons/Planning.png"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  toolbar: {
    minHeight: 220,
    alignItems: 'flex-start',
    paddingTop: 26,
    paddingLeft: 40
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    fontWeight: 1000,
    fontSize: 55,
    letterSpacing: 2.3,
    
  },
  hamburger: {
    // fontSize: 36,
    color: "grey",
    width: 23,
    
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src={hamburgerButton} className={classes.hamburger}/>
            
          </IconButton>
          <div className="bread-crump">
          <BreadCrump />
          </div>
          
          <Typography className={classes.title} noWrap>
          <div className="header-title">
          <img src={planning}/> Планирование
          </div>

           
          </Typography>
          <div className="add-planning" >
            <ModalWindowAdd />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}