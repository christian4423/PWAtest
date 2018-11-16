import {
    createStore,
    combineReducers
} from 'redux';
import layoutReducer from "../reducers/layoutReducer";

export default () => (createStore(
    combineReducers({
        layout: layoutReducer
    })
))