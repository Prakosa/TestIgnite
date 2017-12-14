/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import RestaurantByCategoriesActions from '../Redux/RestaurantByCategoriesRedux'
import AppConfig from '../Config/AppConfig'
import FindEat from '../Services/FindEat'

const ApiForSaga = FindEat.create()

export function * restaurantByCategoriesRequest (api,action) {
  // const { data } = action
  // make the call to the api
  console.log('Action restaurantByCategoriesRequest: '+ action);
  const response = yield call(ApiForSaga.apiForSaga, AppConfig.baseURL+"search?entity_id="+action.entity_id+"&entity_type=city&category="+action.catId, "GET", "");

  // success?
  if (response.status == 200) {
    console.log('200');
    console.log('ACTION DATA : ' + action.catId);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^restoran');
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(RestaurantByCategoriesActions.restaurantByCategoriesSuccess(response.data))
  } else {
    console.log('else');
    yield put(RestaurantByCategoriesActions.restaurantByCategoriesFailure('Error'))
  }
}
