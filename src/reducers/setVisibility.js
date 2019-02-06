import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, SET_VISIBILITY } from '../constants/constants';

const setVisibility = (state = SHOW_ALL, action) =>{
    switch (action.type) {
        case SET_VISIBILITY:
            return action.filter
        default:
            return state
    }
}

export default setVisibility;