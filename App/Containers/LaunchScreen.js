import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import RoundedButton from '../Components/RoundedButton'
import I18n from 'react-native-i18n'


export default class LaunchScreen extends Component {
  constructor (props) {
    super(props)
  }

  _handleCategory (navigate) {
    navigate('TestScreen')
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>

        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={require('../Images/LandingPage/main-logo.png')} style={styles.mainLogo} />
            <Image source={require('../Images/LandingPage/logo.png')} style={styles.logo} />
          </View>

          <View style={styles.section} >
              <RoundedButton style={styles.button} text={"Eat Now"} onPress={() => this._handleCategory(navigate)} />
          </View>

        </ScrollView>
      </View>
    )
  }
}
