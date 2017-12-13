import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  detailRestaurantRequest: ['res_id'],
  detailRestaurantSuccess: ['payload'],
  detailRestaurantFailure: ['error']
})

export const DetailRestaurantTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  // data: null,
  res_id: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const detailRestaurantRequest = (state, action) =>
  state.merge({ fetching: true, payload: null, res_id:action.res_id })

// successful api lookup
export const detailRestaurantSuccess = (state, {payload}) => {
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const detailRestaurantFailure = (state, action) => {
  const { error } = action
  state.merge({ fetching: false, error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DETAIL_RESTAURANT_REQUEST]: detailRestaurantRequest,
  [Types.DETAIL_RESTAURANT_SUCCESS]: detailRestaurantSuccess,
  [Types.DETAIL_RESTAURANT_FAILURE]: detailRestaurantFailure
})
