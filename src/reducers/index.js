import { combineReducers } from 'redux';
import todos from './todos';
import setVisibility from './setVisibility';

export default combineReducers({
    todos,
    setVisibility
})