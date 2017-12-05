import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: "white"
  },
  logo: {
    marginBottom: 150,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  mainLogo:{
    height: 150,
    width: 350,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  button: {
    color: "white"
  },
  title: {
    fontSize: 50,
    fontFamily: 'type.emphasis'
  }
})
