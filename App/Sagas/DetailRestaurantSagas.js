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
import DetailRestaurantActions from '../Redux/DetailRestaurantRedux'
import AppConfig from '../Config/AppConfig'
import FindEat from '../Services/FindEat'

const ApiForSaga = FindEat.create()

export function * detailRestaurantRequest (api, action) {
  // const { data } = action
  // make the call to the api
  const response = yield call(ApiForSaga.apiForSaga, AppConfig.baseURL+"restaurant?res_id="+action.res_id, "GET", "");

  // success?
  if (response.status == 200) {
    console.log('200')
    console.log(response.data)
    console.log('^^^^^^^^^^^^^^^^^^^^^^DINA')
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(DetailRestaurantActions.detailRestaurantSuccess(response.data))
  } else {
    console.log('else');
    console.log(response.status);
    yield put(DetailRestaurantActions.detailRestaurantFailure('Error'))
  }
}
