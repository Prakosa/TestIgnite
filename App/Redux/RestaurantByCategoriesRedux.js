import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  restaurantByCategoriesRequest: ['catId'],
  restaurantByCategoriesSuccess: ['payload'],
  restaurantByCategoriesFailure: ['error']
})

export const RestaurantByCategoriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  // data: null,
  catId: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const restaurantByCategoriesRequest = (state,action) =>{
  return state.merge({ fetching: true, catId:action.catId })
}

// successful api lookup
export const restaurantByCategoriesSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const restaurantByCategoriesFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetching: false, error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESTAURANT_BY_CATEGORIES_REQUEST]: restaurantByCategoriesRequest,
  [Types.RESTAURANT_BY_CATEGORIES_SUCCESS]: restaurantByCategoriesSuccess,
  [Types.RESTAURANT_BY_CATEGORIES_FAILURE]: restaurantByCategoriesFailure
})
