import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  categoriesRequest: null,
  // categoriesSuccess: ['data'],
  categoriesSuccess: ['categoriesPayload'],
  categoriesFailure: ['categoriesError']
})

export const CategoriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  // data: null,
  categoriesFetching: null,
  categoriesPayload: null,
  categoriesError: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const categoriesRequest = (state) =>
  // state.merge({ categoriesFetching: true })
  state.merge({categoriesFetching: true, categoriesPayload: null})

// successful api lookup
export const categoriesSuccess = (state, action) => {
  // console.log('vvvvvvvvvv');
  const { categoriesPayload } = action
  return state.merge({ categoriesFetching: false, categoriesError: null, categoriesPayload })
  // return state.merge({ categoriesFetching: false, categoriesError: null, data })
}

// Something went wrong somewhere.
export const categoriesFailure = (state, action) => {
  const { categoriesError } = action
  return state.merge({categoriesFetching: false, categoriesError})
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_REQUEST]: categoriesRequest,
  [Types.CATEGORIES_SUCCESS]: categoriesSuccess,
  [Types.CATEGORIES_FAILURE]: categoriesFailure
})
