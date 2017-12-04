import React, { Component } from 'react'
import { AppRegistry, ActivityIndicator, ScrollView, Text, KeyboardAvoidingView, ListView, View, Image, Button, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import NavigationBar from 'navigationbar-react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TestScreenStyle'
import RoundedButton from '../Components/RoundedButton'
import I18n from 'react-native-i18n'

export default class TestScreen extends Component {

  constructor(props) {
    super(props);
  }

  handleRestaurant (navigate) {
    navigate('RestaurantScreen')
  }

  render () {
    var standardDataSource = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 !== r2});
    var category = [
    {
        categories: 
        {
          id: "1",
          name: "Delivery"
        }

    },
    {
        categories: 
        {
          id: "2",
          name: "Dine-out"
        }

    }
    ];
    var clonedCategory = standardDataSource.cloneWithRows(category);
    const { navigate } = this.props.navigation
       
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
              <Text style={{ color: 'white', marginRight: 8}}> DropDown </Text>
            </TouchableOpacity>
          </View>
        );
      };


    return (
      <View>
      <NavigationBar 
          componentCenter   =     {<ComponentCenter />}
          componentRight    =     {<ComponentRight />}
          navigationBarStyle=     {{ backgroundColor: '#D32F2F' }}
          statusBarStyle    =     {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />
        <View style={styles.container}>
          <ScrollView>
          <ListView

            dataSource={clonedCategory}
            renderRow={
              (rowData) => 
              <TouchableOpacity style={styles.content} onPress={()=>this.handleRestaurant(navigate)}>
                <Text style={styles.contentTitle} >{rowData.categories.name}</Text>
              </TouchableOpacity>
            }
            />
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
    );
  }
}

AppRegistry.registerComponent('Example List View', () => TestScreen)
