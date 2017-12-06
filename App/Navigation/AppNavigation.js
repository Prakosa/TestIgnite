import { StackNavigator } from 'react-navigation'
import DetailRestaurantScreen from '../Containers/DetailRestaurantScreen'
import RestaurantScreen from '../Containers/RestaurantScreen'
import TestScreen from '../Containers/TestScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen},
  TestScreen: { screen: TestScreen },
  RestaurantScreen: { screen: RestaurantScreen },
  DetailRestaurantScreen: { screen: DetailRestaurantScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
