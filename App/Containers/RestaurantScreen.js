import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity} from 'react-native'
import { SearchBar, Avatar, ListItem, Card, Button, List} from 'react-native-elements'
import { connect } from 'react-redux'
import { Images, Colors } from '../Themes'
import NavigationBar from 'navigationbar-react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Styles
import styles from './Styles/RestaurantScreenStyle'

const restoran = [
  {
    name: 'Ramen',
    costandRating: '20k 5 star',
    cuisine: 'resto',
    locationDistance: 'New York, 5km',
    avatar: 'https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_960_720.jpg'
  },
  {
    name: 'Sushi',
    costandRating: '20k 5 star',
    cuisine: 'resto',
    locationDistance: 'New York, 5km',
    avatar: 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg'
  },
  {
    name: 'Sashimi',
    costandRating: '20k 5 star',
    cuisine: 'resto',
    locationDistance: 'New York, 5km',
    avatar: 'https://cdn.pixabay.com/photo/2017/06/05/18/54/sushi-2374910_960_720.jpg'
  }
]

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
          <View>
            {
              restoran.map((restoran, i) => {
              return (
              <Card key={i} containerStyle={styles.roundedContent}>
                <View style={styles.contentRow} >
                  <Image source={{ uri: restoran.avatar }} style={styles.imageTitle}/>
                  <View style={styles.contentRowColumn} >
                    <Text style={styles.restaurantName}>{restoran.name}</Text>
                    <Text style={styles.costRating}>{restoran.costandRating}</Text>
                    <Text style={styles.cuisine}>{restoran.cuisine}</Text>
                  </View>
                </View>
                <View style={styles.contentColumn}>
                  <Text style={styles.locationDistance}>{restoran.locationDistance}</Text>
                  <TouchableOpacity onPress={()=>this.handleDetailRestaurant(navigate)}>
                    <Text style={styles.txtDetailResto}>See Detail Menu</Text>
                  </TouchableOpacity>
                </View>
              </Card>
              );
              })
            }
            </View>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen)
