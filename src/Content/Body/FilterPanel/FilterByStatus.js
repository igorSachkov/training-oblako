import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
        marginRight: 30
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));




const FilterByStatus = ({ dispatch,  progressAC, membersAC, dateAC }) => {

    const [period, setPeriod] = React.useState('');

    const classes = useStyles();


    const handle = (set) => {
        return function handleChange(event) {
            set(event.target.value);
        }
    }

    return (
        <div>
            <FormControl className={`${classes.formControl} filter-element`}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Статус
                </InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={period}
                    onChange={handle(setPeriod)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem onClick={()=> dispatch(progressAC()) } value={"progress"}>По прогрессу</MenuItem>
                    <MenuItem onClick={()=> dispatch(membersAC())} value={"members"}>По количеству участников</MenuItem>
                    <MenuItem onClick={()=> dispatch(dateAC())} value={"byDate"}>По дате</MenuItem>
                    
                </Select>
            </FormControl>
        </div>
    )
};

export default FilterByStatus;