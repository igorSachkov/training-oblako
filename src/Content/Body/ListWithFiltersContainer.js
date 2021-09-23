import { connect } from "react-redux";
import Filters from "./FilterPanel/Filters"
import List from "./PlaningList/List"
import { deletePlanningItem, editPlanningItem, getEventsThunk } from "../../ReduxStore/planningReducer";
import { useReducer, useEffect, useMemo } from "react";
import constants from "../../ReduxStore/constants";










const ListWithFiltersContainer = (props) => {

    const containerReducer = (state, action) => {
        switch (action.type) {
            case constants.filterByAlphabetItemsConstantAZ:
                return [...state].sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    } else return - 1
                })
            case constants.filterByAlphabetItemsConstantZA:
                return [...state].sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    } else return 1
                })
            case constants.filterByDateConstant:
                return props.items.filter(e => e.date.getMonth() === action.month)
            case constants.refreshAllDatesConstant:
                return props.items

            case constants.searchConstant:
                const pattern = /[^a-zа-я0-9]+/gi;

                return props.items.filter(e => e.name.toLowerCase().replace(pattern, '').indexOf(action.value.toLowerCase().replace(pattern, '')) + 1 )

                case constants.progressConstant:
                    return [...state].sort(function (a, b) {
                        if (a.progress > b.progress) {
                            return 1
                        } else return - 1
                    })

                    case constants.membersConstant:
                        return [...state].sort(function (a, b) {
                            if (a.members > b.members) {
                                return 1
                            } else return - 1
                        })
            default:
                return state
        }
    }
    const a = "lll"
    
    const filterByAlphabetItemsAZ = () => ({ type: constants.filterByAlphabetItemsConstantAZ })
    const filterByAlphabetItemsZA = () => ({ type: constants.filterByAlphabetItemsConstantZA })
    const filterByDate = (month) => ({ type: constants.filterByDateConstant, month })
    const refreshAllDates = () => ({ type: constants.refreshAllDatesConstant })
    const searcherAC = (value) => ({ type: constants.searchConstant, value })
    const progressAC = () => ({ type: constants.progressConstant})
    const membersAC = () => ({ type: constants.membersConstant})

    const [containerState, dispatch] = useReducer(containerReducer, props.items);

    useEffect(() => {
        dispatch(refreshAllDates())
    }, [props.items]);

    useEffect(() => {
        props.getEventsThunk()
        
    }, []);


    return (
        <div>
            <Filters {...props} filterByAlphabetItemsAZ={filterByAlphabetItemsAZ} filterByAlphabetItemsZA={filterByAlphabetItemsZA}
                dispatch={dispatch} filterByDate={filterByDate}
                refreshAllDates={refreshAllDates} searcherAC={searcherAC}
                containerState={containerState} progressAC={progressAC}
                membersAC={membersAC}
            />
            <List {...props} containerState={containerState} />
        </div>)
};
const mapStateToProps = (state) => {

    return {
        items: state.planning
    }

}

export default connect(mapStateToProps, { deletePlanningItem, editPlanningItem, getEventsThunk })(ListWithFiltersContainer);