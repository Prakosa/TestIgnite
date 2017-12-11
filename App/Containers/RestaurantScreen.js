import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity, ListView} from 'react-native'
import { SearchBar, Avatar, ListItem, Card, Button, List} from 'react-native-elements'
import { connect } from 'react-redux'
import { Images, Colors } from '../Themes'
import NavigationBar from 'navigationbar-react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import API from '../Services/Api'
import RestaurantByCategoriesActions from '../Redux/RestaurantByCategoriesRedux'

// Styles
import styles from './Styles/RestaurantScreenStyle'

// const restoran = [
//   {
//     name: 'Ramen',
//     costandRating: '20k 5 star',
//     cuisine: 'resto',
//     locationDistance: 'New York, 5km',
//     avatar: 'https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_960_720.jpg'
//   },
//   {
//     name: 'Sushi',
//     costandRating: '20k 5 star',
//     cuisine: 'resto',
//     locationDistance: 'New York, 5km',
//     avatar: 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg'
//   },
//   {
//     name: 'Sashimi',
//     costandRating: '20k 5 star',
//     cuisine: 'resto',
//     locationDistance: 'New York, 5km',
//     avatar: 'https://cdn.pixabay.com/photo/2017/06/05/18/54/sushi-2374910_960_720.jpg'
//   }
// ]

class RestaurantScreen extends Component {

  constructor(props) {
    super(props);
    const dataObjects = [];
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    this.state ={
        dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  handleDetailRestaurant (navigate) {
    navigate('DetailRestaurantScreen')
  }

  backTestScreen (navigate) {
    navigate('TestScreen')
  }

  renderRow (rowData) {
    if(rowData.restaurant){
      return (
        <View>
              <Card containerStyle={styles.roundedContent}>
                <View style={styles.contentRow} >
                  <Image source={{ uri: rowData.restaurant.featured_image }} style={styles.imageTitle}/>
                  <View style={styles.contentRowColumn} >
                    <Text style={styles.restaurantName}>{rowData.restaurant.name}</Text>
                    <Text style={styles.costRating}>{rowData.restaurant.average_cost_for_two}</Text>
                    <Text style={styles.cuisine}>{rowData.restaurant.cuisines}</Text>
                  </View>
                </View>
                <View style={styles.contentColumn}>
                  <Text style={styles.locationDistance}>{rowData.restaurant.location.city}</Text>
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DetailRestaurantScreen')}}>
                    <Text style={styles.txtDetailResto}>See Detail Menu</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
      )
    }
    return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
  }

  setupRestaurantByCategories () {
    if (!this.props.payload) {
      this.props.restaurantByCategoriesRequest()
    } else {
      this.setState({
          dataSource: this.props.payload.restaurants
      }) 
    }
  }

  checkRestaurantByCategories (newProps) {
    this.forceUpdate();
    if (newProps.payload) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.payload.restaurants)
      })
    }
  }

   componentWillMount () {
    // setup initial Chapter if Redux exist
    this.setupRestaurantByCategories()
  }

  componentWillReceiveProps (newProps) {
    // check new Chapter after request the chapter
    this.checkRestaurantByCategories(newProps)
    console.log('propsdatang');
    console.log(newProps);
  }

  render () {

    const { goBack } = this.props.navigation
    const ComponentLeft = () => {
        return(
          <View style={{ flex: 1, alignItems: 'flex-start'}} >
             <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}} onPress={() => goBack('RestaurantScreen')} >
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
       
      const ComponentRight = () => {
        return(
          <View style={{ flex: 1, alignItems: 'flex-end', }}>
            <TouchableOpacity>
              <Image 
                source={require('../Images/Content/cityselectornew.png')}
                style={{ resizeMode: 'contain', width: 40, height: 40, alignSelf: 'center', marginRight: 8 }}
              />
            </TouchableOpacity>
          </View>
        );
      };
    return (
      <View style={{ flex:1 }}>
        <NavigationBar 
          componentLeft     =     {<ComponentLeft />}
          componentCenter   =     {<ComponentCenter />}
          componentRight    =     {<ComponentRight />}
          navigationBarStyle=     {{ backgroundColor: '#D32F2F' }}
          statusBarStyle    =     {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />
        <SearchBar
          round
          lightTheme
          // onChangeText={someMethod}
          // onClearText={someMethod}
          inputStyle={{backgroundColor: '#fff'}}
          containerStyle={{backgroundColor: '#D32F2F'}}
          placeholder='Type Here...' />
        <View style={{ flex:1 }}>
        <ScrollView style={{ marginBottom: 64 }}>
        <View style={styles.content}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
        </ScrollView>
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
     </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    payload: state.restaurantByCategories.payload,
    error: state.restaurantByCategories.error,
    fetching: state.restaurantByCategories.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restaurantByCategoriesRequest: () => dispatch(RestaurantByCategoriesActions.restaurantByCategoriesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen)
