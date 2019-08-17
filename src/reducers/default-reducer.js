// default reducer
// Note: You can remove this reducer and create your own reducer

import { FETCH_DATA } from '../actions';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch(type) {
        case FETCH_DATA:
            return {
                ...state,
                payload
            };
        default:
            return state;
    }
}