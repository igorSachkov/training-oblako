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
        marginRight: 30,
        marginLeft: 30
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const FilterByAlphabet = ({filterByAlphabetItemsAZ, filterByAlphabetItemsZA, dispatch}) => {
    const classes = useStyles();
    const [program, setProgram] = React.useState('');

    const handle = (set) => {
        return function handleChange(event) {
            set(event.target.value);
        }
    }

    return (
        <div>
            <FormControl className={`${classes.formControl} filter-element`}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Программа
                </InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={program}
                    onChange={handle(setProgram)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem onClick={()=> dispatch(filterByAlphabetItemsAZ())} value={"a-z"}>По алфавиту</MenuItem>
                    <MenuItem onClick={()=> dispatch(filterByAlphabetItemsZA())} value={"z-a"}>В обратном порядке</MenuItem>

                </Select>

            </FormControl>
        </div>
    )
};

export default FilterByAlphabet;