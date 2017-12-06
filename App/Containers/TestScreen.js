import React, { Component } from 'react'
import { AppRegistry, ActivityIndicator, ScrollView, Text, KeyboardAvoidingView, ListView, View, Image, Button, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import NavigationBar from 'navigationbar-react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TestScreenStyle'
import RoundedButton from '../Components/RoundedButton'
import I18n from 'react-native-i18n'

export default class TestScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    }
  }

  _showModal = () => this.setState({isModalVisible: true})

  _hideModal = () => this.setState({isModalVisible: false})

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

    },
    {
        categories: 
        {
          id: "3",
          name: "Nightlife"
        }

    },
    {
        categories: 
        {
          id: "4",
          name: "Catching-up"
        }

    },

    ];
    var clonedCategory = standardDataSource.cloneWithRows(category);
    const { navigate } = this.props.navigation
       
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
          componentCenter   =     {<ComponentCenter />}
          componentRight    =     {<ComponentRight />}
          navigationBarStyle=     {{ backgroundColor: '#D32F2F' }}
          statusBarStyle    =     {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
        />
        <View style={{ flex:1 }}>
        <ScrollView style={{ marginBottom: 64 }}>
          <ListView
            dataSource={clonedCategory}
            renderRow={
              (rowData) => 
              <View style={styles.content}>
                <View style={styles.contentDetail}>
                  <View style={{ marginLeft: 8, borderColor: '#D32F2F', borderWidth: 1}}/>
                  <Text style={styles.contentTitle} >{rowData.categories.name}</Text>
                  <View style={styles.contentBackgroundButton}/>
                  <TouchableOpacity style={styles.goto} onPress={()=>this.handleRestaurant(navigate)}><Image source={require('../Images/LandingPage/image.png')} style={{width: 70, height: 70}}/></TouchableOpacity>
                </View>
              </View>
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
