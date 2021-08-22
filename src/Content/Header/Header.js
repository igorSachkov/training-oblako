import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import BreadCrump from './BreadCrump';
import ModalWindowAdd from './ModalWindowAdd';
import hamburgerButton from "./../../icons/hamburger-button.png"
import planning from "./../../icons/Planning.png"
import { Grid } from '@material-ui/core';
import { useState } from 'react';



export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="header-container">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <img src={hamburgerButton} className="hamburger-icon"/>
          </IconButton>
          
        </Grid>
        <Grid item xs={6}>
          <div className="add-planning" >
            <ModalWindowAdd />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="bread-crump">
            <BreadCrump />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="header-title">
            <img src={planning} /> Планирование
          </div>
        </Grid>
      </Grid>
    </div>
  );
}