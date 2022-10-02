import {combineReducers} from 'redux';
import { userReducer } from './userReducer';
import { metricsReducer} from './metricsReducer'

const reducers = combineReducers({
    userReducer,
    metricsReducer,
});

export default reducers;