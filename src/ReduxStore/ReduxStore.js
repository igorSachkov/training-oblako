import { LaptopWindows } from "@material-ui/icons";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { planningReducer } from "./planningReducer";
import { reducer as formReducer } from 'redux-form'
import { jsonWasLoaded } from "./planningReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    planning: planningReducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
window.store = store





