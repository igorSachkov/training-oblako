
import ListItemIcon from "./ListItemIcon";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux"
import { deletePlanningItem, editPlanningItem } from "./../../../ReduxStore/planningReducer"
import progressIcon from "./../../../icons/iconProgress.png"
const monthArray = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
const showDate = (date) => {
    let outDate = new Date(date)
    let minutes = `${outDate.getMinutes()}`
    if(minutes.length === 1) minutes = `0${minutes}`
    return `${outDate.getDate()} ${monthArray[outDate.getMonth()].substring(0, 3).toLowerCase()} ${outDate.getHours()}:${minutes}`
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {

        textAlign: 'left',

    },
}));

const List = ({ items, deletePlanningItem, editPlanningItem }) => {
    const classes = useStyles();
    return (
        <div >
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
            <div className="items-container">
                {items.map((item, i) => {
                    return (<div key={item.id} className="list__item">
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={1}>
                                {showDate(item.date)}
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
                                <div>
                                    <img src={progressIcon} /> {item.progress} %
                                </div>

                            </Grid>
                            <Grid item xs={1}>
                                <ListItemIcon targetId={item.id} deletePlanningItem={deletePlanningItem} editPlanningItem={editPlanningItem} item={item} />
                            </Grid>
                        </Grid>
                    </div>)
                })}
                {/* <EditItemForm /> */}
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {

    return {
        items: state.planning
    }
};

export default connect(mapStateToProps, { deletePlanningItem, editPlanningItem })(List);