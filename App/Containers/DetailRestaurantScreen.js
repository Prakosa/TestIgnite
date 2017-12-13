import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity, ListView} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import NavigationBar from 'navigationbar-react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import API from '../Services/Api'
import DetailRestaurantActions from '../Redux/DetailRestaurantRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DetailRestaurantScreenStyle'

class DetailRestaurantScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurantName: '',
      restaurantImage: '',
      restaurantAddress: '',
      restaurantCuisines: '',
      restaurantMenuLink: '',
      restaurantOtherLink: '',
      restaurantReviews: '',
      restaurantPhotoUrl: '',
      res_id: null
    }
  }

  setupDetail () {
    const {state} = this.props.navigation;
    this.state.res_id=state.params.res_id
    console.log(this.props.navigation.state.params.res_id);
    this.props.detailRestaurantRequest(state.params.res_id)
    // if (!this.props.payload) {
    //   this.props.detailRestaurantRequest()
    // } else {
    //   this.setState({
    //     restaurantName: this.props.payload.name,
    //     restaurantImage: this.props.payload.featured_image,
    //     restaurantAddress: this.props.payload.location.city,
    //     restaurantCuisines: this.props.payload.cuisines,
    //     restaurantMenuLink: this.props.payload.menu_url,
    //     restaurantOtherLink: this.props.payload.deeplink,
    //     restaurantReviews: this.props.payload.user_rating.rating_text
    //   })
    // }
  }

  checkDetail (newProps) {
    if (newProps.payload) {
      console.log(newProps.payload.name);
      console.log('***********************************************');
      this.setState({
        restaurantName: newProps.payload.name,
        restaurantImage: newProps.payload.featured_image,
        restaurantAddress: newProps.payload.location.city,
        restaurantCuisines: newProps.payload.cuisines,
        restaurantMenuLink: newProps.payload.menu_url,
        restaurantOtherLink: newProps.payload.deeplink,
        restaurantReviews: newProps.payload.user_rating.rating_text,
        restaurantPhotoUrl: newProps.payload.photo_url
      })
    }
  }

  componentWillMount () {
    // setup initial Chapter if Redux exist
    this.setupDetail()
  }

  componentWillReceiveProps (newProps) {
    // check new Chapter after request the chapter
    console.log(newProps.name);
     console.log('SETUPDETAIL^^^^^^^^^^^^^^^^^^^^')
    this.checkDetail(newProps)
  }

  handleRestaurant (navigate) {
    navigate('RestaurantScreen')
  }

  render () {
    const { goBack } = this.props.navigation
    const ComponentLeft = () => {
        return(
          <View style={{ flex: 1, alignItems: 'flex-start'}} >
             <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}} onPress={() => goBack(null)}>
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
      <View style={{ flex:1 }}>
        <NavigationBar 
          componentLeft     =     {<ComponentLeft />}
          componentCenter   =     {<ComponentCenter />}
          navigationBarStyle=     {{ backgroundColor: '#D32F2F' }}
          statusBarStyle    =     {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />
        <View style={styles.content}>
          <ScrollView style={{ marginBottom: 17, marginTop: 17 }}>
            <Text style={styles.restaurantName}>{this.state.restaurantName}</Text>
            {this.state.restaurantImage ?
              <Image source={{uri: this.state.restaurantImage}} style={styles.imageContent}/>
              : <Image source={{ uri: 'http://vignette3.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png' }} style={styles.imageContent} onPress={() => Linking.openURL(this.state.restaurantPhotoUrl)}/> }
            <Text style={styles.contentTitleTop}>{this.state.restaurantAddress}</Text>
            <Text style={styles.contentTitleTop}>{this.state.restaurantCuisines}</Text>
            <Text style={styles.contentTitleBottom}>{this.state.restaurantMenuLink}</Text>
            <Text style={styles.contentTitleOther}>{this.state.restaurantOtherLink}</Text>
            <Text style={styles.contentTitleOther}>{this.state.restaurantReviews}</Text>
          </ScrollView>
        </View>        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state.detailRestaurant.payload,
    error: state.detailRestaurant.error,
    fetching: state.detailRestaurant.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detailRestaurantRequest: (res_id) => dispatch(DetailRestaurantActions.detailRestaurantRequest(res_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailRestaurantScreen)
