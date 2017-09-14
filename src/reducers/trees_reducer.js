import {
  FETCH_TREES,
  LOAD_ERROR,
  SHOW_IMAGE,
  HIDE_IMAGE
} from '../actions/types';

export default function(state= {}, action){
  switch(action.type){
    case FETCH_TREES:
      //change to object using the names as keys
      return _.mapKeys(action.payload, 'name');
    case LOAD_ERROR:
      return { ...state, error: action.payload };
    case SHOW_IMAGE:
      //return current state with updated entry
      return { ...state, [action.id]: {...state[action.id], shown: true }};
    case HIDE_IMAGE:
      return { ...state, [action.id]: {...state[action.id], shown: false }};
  }
  return state;
}
