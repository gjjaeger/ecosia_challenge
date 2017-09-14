import axios from 'axios';
import { FETCH_TREES, LOAD_ERROR, SHOW_IMAGE, HIDE_IMAGE, HIDE_IMAGES } from './types';

const ROOT_URL='https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json';

export function fetchTrees(){
  return function(dispatch) {
    axios.get(`${ROOT_URL}`)
      .then(response => {
        dispatch({
          type: FETCH_TREES,
          payload: response.data.trees
        });
      })
      .catch(() => {
        dispatch(loadError('An error has occured. Please try again later.'))
      });
  }
}

export function loadError(error){
  return {
    type: LOAD_ERROR,
    payload: error
  };
}

export function showImage(tree){
  return {
    type: SHOW_IMAGE,
    id: tree,
    payload:{shown:true}
  };
}

export function hideImage(tree){
  return {
    type: HIDE_IMAGE,
    id: tree,
    payload:{shown:false}
  };
}
