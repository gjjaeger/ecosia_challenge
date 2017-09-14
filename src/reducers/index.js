import { combineReducers } from 'redux';
import treesReducer from './trees_reducer';

const rootReducer = combineReducers({
  trees: treesReducer,
});

export default rootReducer;
