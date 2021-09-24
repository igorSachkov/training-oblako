
import ListItemIcon from "./ListItemIcon";
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux"
import { deletePlanningItem, editPlanningItem } from "./../../../ReduxStore/planningReducer"
import progressIcon from "./../../../icons/iconProgress.png"
import { monthArray, dateConverter } from "../../Common/Dates";
const showDate = (date) => {
    
    // let outDate = new Date(date)
    let newDate = dateConverter(date)
    let minutes = `${newDate.getMinutes()}`
    if(minutes.length === 1) minutes = `0${minutes}`
    return `${newDate.getDate()} ${monthArray[newDate.getMonth()].substring(0, 3).toLowerCase()} ${newDate.getHours()}:${minutes}`
}




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {

        textAlign: 'left',

    },
}));

const List = ({ items, deletePlanningItem, editPlanningItem, containerState }) => {
    const classes = useStyles();
    



    









    
    const [booleanState, setBoolean] = useState(false);
    const widthListener = ()=> {
        window.innerWidth <= 960 ? setBoolean(true) : setBoolean(false)
    }
    useEffect(() => {
        window.addEventListener('resize', widthListener)
        return () => {
            window.removeEventListener('resize', widthListener);
        };
    });
    return (
        <div >
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3} md={1}>
                        Дата начала
                    </Grid>
                    <Grid item xs={4} md={5}>
                        Название
                    </Grid>
                    <Grid item xs={2} md={2} className="members">
                        
                    </Grid>
                    <Grid item xs={2} md={2} className="coach">
                        Тренер
                    </Grid>
                    <Grid item xs={3} md={1}>
                        Прогресс
                    </Grid>
                    <Grid item xs={1} md={1} className="edit-item-column"></Grid>
                </Grid>
            </div>
            <div className="items-container">
                {containerState.map((item, i) => {
                    return (<div key={item.id} className="list__item" onClick={()=> booleanState && console.log(`you clicked on ${item.id}`) }>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={3} md={1}>
                                {showDate(item.date)}
                            </Grid>
                            <Grid item xs={4} md={5}>
                                {item.name}
                            </Grid>
                            <Grid item xs={2} md={2}>
                                {item.members}
                            </Grid>
                            <Grid item xs={2} md={2} className="coach">
                                {item.coach}
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <div className="progress-percents">
                                    <img src={progressIcon} /> {item.progress} %
                                </div>

                            </Grid>
                            <Grid item xs={1} md={1} className="edit-item-column">
                                <ListItemIcon targetId={item.id} deletePlanningItem={deletePlanningItem} editPlanningItem={editPlanningItem} item={item}/>
                            </Grid>
                        </Grid>
                    </div>)
                })}
                
            </div>
        </div>
    )
};

export default List;