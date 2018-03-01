import { combineReducers } from 'redux';
import people from './reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    people,
    form: formReducer
});

export default rootReducer;