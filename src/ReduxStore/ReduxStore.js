import { LaptopWindows } from "@material-ui/icons";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { planningReducer } from "./planningReducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    planning: planningReducer,
    form: formReducer
})

export const store = createStore(reducers)
window.store = store