import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */
import { CategoriesTypes } from '../Redux/CategoriesRedux'
import { RestaurantByCategoriesTypes } from '../Redux/RestaurantByCategoriesRedux'
import { DetailRestaurantTypes } from '../Redux/DetailRestaurantRedux'
import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { categoriesRequest} from './CategoriesSagas'
import { restaurantByCategoriesRequest} from './RestaurantByCategoriesSagas'
import { detailRestaurantRequest} from './DetailRestaurantSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, categoriesRequest, api),
    takeLatest(RestaurantByCategoriesTypes.RESTAURANT_BY_CATEGORIES_REQUEST, restaurantByCategoriesRequest, api),
    takeLatest(DetailRestaurantTypes.DETAIL_RESTAURANT_REQUEST, detailRestaurantRequest, api),
  ])
}
