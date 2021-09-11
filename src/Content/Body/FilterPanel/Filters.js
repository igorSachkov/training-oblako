import React from 'react';
import { makeStyles, alpha } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import { filterByAlphabetItemsAZ, filterByAlphabetItemsZA, filterByDate } from '../../../ReduxStore/planningReducer';
import { useEffect } from 'react';
import filterSettings from "./../../../icons/filter-settings.png"
import clear from "./../../../icons/clear.png"
import FilterByAlphabet from './FilterByAlphabet';
import FilterByDate from './FilterByDate';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));




const Filters = ({ filterByAlphabetItemsAZ, filterByAlphabetItemsZA, filterByDate, items, dispatch, refreshAllDates, searcherAC }) => {
    
    const classes = useStyles();
    
    const [search, setSearch] = React.useState('');
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
        dispatch(searcherAC(event.target.value))
        
    }
    const [status, setStatus] = React.useState('');

    const filterDateList = (list) => {
        const uniqueDates = [...list.map(e=> `${e.date.getFullYear()}${e.date.getMonth()}`)]
        const result = [...new Set(uniqueDates)].sort((a, b)=> {
            
            return Number(b) - Number(a)})
        
        return result
    }
    
    const [dateList, setDateList] = React.useState(filterDateList(items));
    
    useEffect(() => {
        setDateList(filterDateList(items))
       
    }, [items]);

    const [itemsLength, setItemsLength] = React.useState(items.length);

    useEffect(() => {
        setItemsLength(items.length)
    }, [items]);
    const handle = (set) => {
        return function handleChange(event) {
            set(event.target.value);
        }
    }

    return (
        <div className="filters-container">
            <div className="filters-container__top">
                <div className="filters-container__search">
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Поиск"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={handleChangeSearch}
                        />

                    </div>
                </div>
                <FilterByAlphabet filterByAlphabetItemsAZ={filterByAlphabetItemsAZ} filterByAlphabetItemsZA={filterByAlphabetItemsZA} dispatch={dispatch}/>
                <FilterByDate dateList={dateList} filterByDate={filterByDate} dispatch={dispatch} refreshAllDates={refreshAllDates}/>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                            Статус
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={status}
                            onChange={handle(setStatus)}
                            displayEmpty
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>Все</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="filters-container__bottom">
                <div className="filters-container__bottom__sessions">{itemsLength} сессии</div>
                <div className="filters-container__bottom__filter-settings"><img src={filterSettings} />Настроить фильтр</div>
                <div className="filters-container__bottom__clear"><img src={clear} />Сбросить</div>
            </div>
        </div>
    )
};



export default Filters;