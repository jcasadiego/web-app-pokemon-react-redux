import { fromJS } from "immutable";
import { SET_LOADING, SET_VALUESEARCH } from "../actions/types";

const initialState = fromJS({
    loading: false,
    valueInputSearch: '',
});

export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOADING:
            return state.setIn(['loading'],  fromJS(action.payload));
        case SET_VALUESEARCH:
            return state.setIn(['valueInputSearch'], fromJS(action.payload));
    default:
        return state;
    }
}