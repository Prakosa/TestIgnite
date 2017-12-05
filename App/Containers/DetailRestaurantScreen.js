import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import NavigationBar from 'navigationbar-react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DetailRestaurantScreenStyle'

class DetailRestaurantScreen extends Component {

  handleRestaurant (navigate) {
    navigate('RestaurantScreen')
  }

  render () {
    const { navigate } = this.props.navigation
    const ComponentLeft = () => {
        return(
          <View style={{ flex: 1, alignItems: 'flex-start'}} >
             <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}} onPress={()=>this.handleRestaurant(navigate)}>
              <Image 
                source={require('../Images/button-back.png')}
                style={{ resizeMode: 'contain', width: 40, height: 40, alignSelf: 'center' }}
              />
            </TouchableOpacity>
          </View>
        );
      };
       
      const ComponentCenter = () => {
        return(
          <View style={{ flex: 1, }}>
             <Image
              source={require('../Images/Content/logonavbar.png')}
              style={{resizeMode: 'contain', width: 200, height: 100, alignSelf: 'center' }}
            />
          </View>
        );
      };
       
    return (
      <View>
        <NavigationBar 
          componentLeft     =     {<ComponentLeft />}
          componentCenter   =     {<ComponentCenter />}
          navigationBarStyle=     {{ backgroundColor: '#D32F2F' }}
          statusBarStyle    =     {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />
        <View style={styles.content}>
          <Text style={styles.restaurantName}>Restaurant Name</Text>
          <Image source={require('../Images/makanan.jpg')} style={styles.imageContent}/>
          <Text style={styles.contentTitleTop}>Address and Distance</Text>
          <Text style={styles.contentTitleTop}>Other Details..</Text>
          <Text style={styles.contentTitleBottom}>Menu Link</Text>
          <Text style={styles.contentTitleOther}>Other Links</Text>
          <Text style={styles.contentTitleOther}>Reviews</Text>
        </View>        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailRestaurantScreen)
