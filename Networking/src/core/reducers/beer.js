import { FETCH_MORE_BEERS, RESET_LIST, SET_FILTER_NAME } from '../types';
import { uniqBy } from 'lodash';

const defaultState = {
  list: [],
  page: 1,
  name: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MORE_BEERS:
      return {
        ...state,
        list: uniqBy([...state.list, ...action.list], item => item.id),
        page: state.page + 1,
      }
    case RESET_LIST:
      return {
        ...defaultState
      }
    case SET_FILTER_NAME:
      return {
        list: [],
        page: 1,
        name: action.name,
      }
    default:
      return state
  }
}
