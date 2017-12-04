import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import NavigationBar from 'navigationbar-react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RestaurantScreenStyle'

class RestaurantScreen extends Component {

  constructor(props) {
    super(props);
  }

  handleDetailRestaurant (navigate) {
    navigate('DetailRestaurantScreen')
  }

  backTestScreen (navigate) {
    navigate('TestScreen')
  }

  render () {

    const { navigate } = this.props.navigation
    const ComponentLeft = () => {
        return(
          <View style={{ flex: 1, alignItems: 'flex-start'}} >
             <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}} onPress={()=>this.backTestScreen(navigate)} >
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
              source={require('../Images/zomato_logo.png')}
              style={{resizeMode: 'contain', width: 200, height: 100, alignSelf: 'center' }}
            />
          </View>
        );
      };
       
      const ComponentRight = () => {
        return(
          <View style={{ flex: 1, alignItems: 'flex-end', }}>
            <TouchableOpacity>
              <Text style={{ color: 'white', marginRight: 8}}> Dropdown </Text>
            </TouchableOpacity>
          </View>
        );
      };
    return (
      <View style={styles.container}>
        <NavigationBar 
          componentLeft     =     {<ComponentLeft />}
          componentCenter   =     {<ComponentCenter />}
          componentRight    =     {<ComponentRight />}
          navigationBarStyle=     {{ backgroundColor: '#D32F2F' }}
          statusBarStyle    =     {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />
        <TouchableOpacity style={styles.content} onPress={()=>this.handleDetailRestaurant(navigate)}>
          <View style={styles.contentRow} >
            <Image source={Images.launch} style={styles.imageTitle}/>
            <View style={styles.contentRowColumn} >
              <Text style={styles.restaurantName}>Restaurant Name</Text>
              <Text style={styles.costRating}>Cost and Rating</Text>
              <Text style={styles.cuisine}>Cuisine</Text>
            </View>
          </View>
          <View style={styles.contentColumn}>
            <Text style={styles.locationDistance}>Location and Distance</Text>
          </View>
        </TouchableOpacity>
        <BottomNavigation
              labelColor="white"
              rippleColor="white"
              tabBarPosition= 'bottom'
              style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
            >
              <Tab
                barBackgroundColor="#37474F"
                label="Movies & TV"
                icon={<Icon size={24} color="white" name="tv" />}
              />
              <Tab
                barBackgroundColor="#00796B"
                label="Music"
                icon={<Icon size={24} color="white" name="music-note" />}
              />
              <Tab
                barBackgroundColor="#5D4037"
                label="Books"
                icon={<Icon size={24} color="white" name="book" />}
              />
              <Tab
                barBackgroundColor="#3E2723"
                label="Newsstand"
                icon={<Icon size={24} color="white" name="tv" />}
              />
            </BottomNavigation>
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen)
