import { connect } from "react-redux";
import Filters from "./FilterPanel/Filters"
import List from "./PlaningList/List"
import { deletePlanningItem, editPlanningItem } from "../../ReduxStore/planningReducer";
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
            default:
                return state
        }
    }

    const filterByAlphabetItemsAZ = () => ({ type: constants.filterByAlphabetItemsConstantAZ })
    const filterByAlphabetItemsZA = () => ({ type: constants.filterByAlphabetItemsConstantZA })
    const filterByDate = (month) => ({ type: constants.filterByDateConstant, month })
    const refreshAllDates = () => ({ type: constants.refreshAllDatesConstant })

    const [containerState, dispatch] = useReducer(containerReducer, props.items);

    useEffect(() => {
        dispatch(refreshAllDates())
    }, [props.items]);



    return (
        <div>
            <Filters {...props} filterByAlphabetItemsAZ={filterByAlphabetItemsAZ} filterByAlphabetItemsZA={filterByAlphabetItemsZA} 
            dispatch={dispatch} filterByDate={filterByDate} 
            refreshAllDates={refreshAllDates}
            />
            <List {...props} containerState={containerState} />
        </div>)
};
const mapStateToProps = (state) => {

    return {
        items: state.planning
    }

}

export default connect(mapStateToProps, { deletePlanningItem, editPlanningItem })(ListWithFiltersContainer);