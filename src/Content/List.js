
import ListItemIcon from "./ListItemIcon";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux"
import {deletePlanningItem} from "./../ReduxStore/planningReducer"
import { useState } from "react";
import EditItemForm from "./EditItemForm";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {

        textAlign: 'left',

    },
}));






const List = ({ items, deletePlanningItem }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        Дата начала
                    </Grid>
                    <Grid item xs={5}>
                        Название
                    </Grid>
                    <Grid item xs={2}>
                        Участников
                    </Grid>
                    <Grid item xs={2}>
                        Тренер
                    </Grid>
                    <Grid item xs={1}>
                        Прогресс
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
            <div>
                {items.map((item, i) => {
                    return (<div key={item.id} className="list__item">
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={1}>
                                {`${item.date.getDate()} ${item.date.getMonth()}`}
                            </Grid>
                            <Grid item xs={5}>
                                {item.name}
                            </Grid>
                            <Grid item xs={2}>
                                {item.members}
                            </Grid>
                            <Grid item xs={2}>
                                {item.coach}
                            </Grid>
                            <Grid item xs={1}>
                                {item.progress}
                            </Grid>
                            <Grid item xs={1}>
                                <ListItemIcon targetId={item.id} deletePlanningItem={deletePlanningItem}/>
                            </Grid>
                        </Grid>
                    </div>)
                })}

                {/* <EditItemForm /> */}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
  
    return {
        items: state.planning
    }
  }

export default connect(mapStateToProps, {deletePlanningItem})(List)