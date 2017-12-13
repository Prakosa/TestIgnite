import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity, ListView} from 'react-native'
import { SearchBar, Avatar, ListItem, Card, Button, List} from 'react-native-elements'
import { connect } from 'react-redux'
import { Images, Colors } from '../Themes'
import NavigationBar from 'navigationbar-react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import API from '../Services/Api'
import RestaurantByCategoriesActions from '../Redux/RestaurantByCategoriesRedux'

import Modal from 'react-native-modal'
// Styles
import styles from './Styles/RestaurantScreenStyle'
import RoundedButton from '../Components/RoundedButton'
import Config from '../Config/AppConfig'
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
        isModalVisible: false,
        dataSource: ds.cloneWithRows(dataObjects),
        catId:null,
        restaurant: []
    }
  }

  _showModal = () => this.setState({isModalVisible: true})

  _hideModal = () => this.setState({isModalVisible: false})

  handleDetailRestaurant (navigate, res_id) {
    navigate('DetailRestaurantScreen', {res_id:res_id})
  }

  renderRow (rowData) {
    const { navigate } = this.props.navigation
    if(rowData.restaurant){
      return (
        <View>
              <Card containerStyle={styles.roundedContent}>
                <View style={styles.contentRow} >
                {rowData.restaurant.featured_image ?
                  <Image source={{ uri: rowData.restaurant.featured_image }} style={styles.imageTitle}/>
                  : <Image source={{ uri: 'http://vignette3.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png' }} style={styles.imageTitle}/> }
                  <View style={styles.contentRowColumn} >
                    <Text style={styles.restaurantName}>{rowData.restaurant.name}</Text>
                    <Text style={styles.costRating}>{rowData.restaurant.average_cost_for_two}</Text>
                    <Text style={styles.cuisine}>{rowData.restaurant.cuisines}</Text>
                  </View>
                </View>
                <View style={styles.contentColumn}>
                  <Text style={styles.locationDistance}>{rowData.restaurant.location.city}</Text>
                  <TouchableOpacity onPress={()=>{this.handleDetailRestaurant(navigate, rowData.restaurant.R.res_id)}}>
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
      const {state} = this.props.navigation;
      this.state.catId=state.params.catId
      console.log(this.props.navigation.state.params.catId);
      this.props.restaurantByCategoriesRequest(state.params.catId)
    // if (!this.props.payload) {
    //   this.props.restaurantByCategoriesRequest()
    // } else {
    //   this.setState({
    //       dataSource: this.props.payload.restaurants
    //   }) 
    // }
  }

  checkRestaurantByCategories (newProps) {
    // this.setState({
    //       restaurant: newProps.payload.restaurants,
    //       dataSource: this.state.dataSource.cloneWithRows(newProps.payload.restaurants)
    //   })
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
  }

  render () {

    const { goBack } = this.props.navigation
    const ComponentLeft = () => {
        return(
          <View style={{ flex: 1, alignItems: 'flex-start'}} >
             <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}} onPress={() => goBack(null)} >
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
            <TouchableOpacity onPress={this._showModal}>
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
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.contentModalTop}>
            <Text style={styles.txtModal}>City</Text>
            <RoundedButton style={styles.button} text={"New York"} onPress={this._hideModal} />
            <RoundedButton style={styles.button} text={"New Jersey"} onPress={this._hideModal} />
          </View>
          <View style={styles.contentModalBottom}>
          </View>
        </Modal>
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
RestaurantScreen.propTypes = {}

const mapStateToProps = (state) => {
  return {
    payload: state.restaurantByCategories.payload,
    error: state.restaurantByCategories.error,
    fetching: state.restaurantByCategories.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restaurantByCategoriesRequest: (catId) => dispatch(RestaurantByCategoriesActions.restaurantByCategoriesRequest(catId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen)
