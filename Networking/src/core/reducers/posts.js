import { ADD_POST, FETCH_POSTS } from '../types';
import { uniqBy } from 'lodash';

const defaultState = {
  list: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        list: uniqBy([...state.list, ...action.list]),
      }
    case ADD_POST:
      return {
        list: [action.post, ...state.list]
      }
    default:
      return state
  }
}
