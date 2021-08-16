import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadCrump = () => {

    const classes = useStyles();

    return (
        <Breadcrumbs separator="-" aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Главная
            </Link>
            <Typography color="textPrimary">Планирование</Typography>
        </Breadcrumbs>
    )
}

export default BreadCrump