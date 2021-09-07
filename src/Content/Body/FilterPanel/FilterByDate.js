import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { monthArray } from "../../Common/Dates";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));




const FilterByDate = ({dateList, filterByDate, dispatch, refreshAllDates}) => {
    
    const [period, setPeriod] = React.useState('');
    
    const classes = useStyles();
    

    const handle = (set) => {
        return function handleChange(event) {
            set(event.target.value);
        }
    }

    return (
        <div>
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Период
            </InputLabel>
            <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={period}
                onChange={handle(setPeriod)}
                displayEmpty
                className={classes.selectEmpty}
            >
                <MenuItem value="" onClick={()=> dispatch(refreshAllDates())}>
                    <em>Все</em>
                </MenuItem>
                {/* <MenuItem value={10}>Ten</MenuItem> */}
                {dateList.map((item, i) => {
                    return (
                        <MenuItem key={i} value={item} onClick={()=> dispatch(filterByDate(Number(item.substr(4))))}>{`${monthArray[Number(item.substr(4))]} ${item.substr(0,4)}`}</MenuItem>
                    )
                })}

            </Select>
        </FormControl>
    </div>
    )
};

export default FilterByDate;