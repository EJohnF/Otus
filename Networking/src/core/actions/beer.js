import axios from 'axios'
import { FETCH_MORE_BEERS, SET_FILTER_NAME } from '../types';

export const fetchMoreBeer = () => async (dispatch, getState) => {
  const { page, name } = getState()
  console.log(page, name, `https://api.punkapi.com/v2/beers?page=${page}&per_page=20${name ? `&beer_name=${name}` : ''}`)
  try {
    const newBeer = await axios({
      method: 'get',
      url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=20${name ? `&beer_name=${name}` : ''}`,
    })
    dispatch({
      type: FETCH_MORE_BEERS,
      list: newBeer.data
    })
  } catch (e) {
    console.warn(e)
  }
}

export const setFilterName = (name) => async (dispatch) => {
  dispatch({
    type: SET_FILTER_NAME,
    name,
  })
  const newBeer = await axios({
    method: 'get',
    url: `https://api.punkapi.com/v2/beers?page=1&per_page=20${name ? `&beer_name=${name}` : ''}`,
  })
  dispatch({
    type: FETCH_MORE_BEERS,
    list: newBeer.data
  })
}
