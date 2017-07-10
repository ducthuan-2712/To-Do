/* 
 * @flow
 */

import {
  FETCH_LOADING,
  ALL_LOADING
} from '../actions/loading';

const initialState = {
  loading: false
};

export default function user(state = initialState, action) {
  if (action.type === FETCH_LOADING) {
    console.log('loading')

    return {
      loading: true,
    }
  }

  if (action.type === ALL_LOADING) {
    console.log('loadone')
    
    return {
      loading: false,
    }
  }

  return state;
}
