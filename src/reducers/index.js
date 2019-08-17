import { combineReducers } from 'redux';
import defaultReducer from './default-reducer';

const rootReducers = combineReducers({
    default: defaultReducer
});

export default rootReducers;