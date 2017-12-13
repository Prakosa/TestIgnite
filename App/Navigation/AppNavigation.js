import { StackNavigator } from 'react-navigation'
import ApiTestingScreen from '../Containers/ApiTestingScreen'
import DetailRestaurantScreen from '../Containers/DetailRestaurantScreen'
import RestaurantScreen from '../Containers/RestaurantScreen'
import TestScreen from '../Containers/TestScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ApiTestingScreen: { screen: ApiTestingScreen },
  LaunchScreen: { screen: LaunchScreen},
  TestScreen: { screen: TestScreen },
  RestaurantScreen: { screen: RestaurantScreen },
  DetailRestaurantScreen: { screen: DetailRestaurantScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TestScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
