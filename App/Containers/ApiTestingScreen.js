import React, { Component } from 'react'
import { ScrollView, Text, View, ListView, TouchableOpacity, Image} from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import AlertMessage from '../Components/AlertMessage'
// Styles
import styles from './Styles/ApiTestingScreenStyle'
import CategoriesActions from '../Redux/CategoriesRedux'

class ApiTestingScreen extends React.Component {

  constructor (props) {
    super(props)

    // const dataObjects = []

    // const rowHasChanged = (r1, r2) => r1 !== r2
    // const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // this.ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})
    
    // this.state = {
    //   dataSource: this.ds.cloneWithRowsAndSections(dataObjects)
    // }
    // this.getData()
     const dataObjects = [
      { id: '1', name: 'lala' }
    ];
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    this.state ={
        categories: [],
        dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  handleRestaurant (navigate, catID) {
    navigate('RestaurantScreen', { ID: catID })
  }

  renderRow (rowData) {
    if(rowData.categories){
      return (
        <View>
          <Text>{rowData.categories.id}</Text>
          <Text>{rowData.categories.name}</Text>
          <TouchableOpacity style={styles.goto} onPress={()=> {
            this.handleRestaurant(navigate, rowData.categories.id);
          }}><Image source={require('../Images/LandingPage/image.png')} style={{width: 70, height: 70}}/></TouchableOpacity>
        </View>
      )
    }
    return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
  }

  // getData = async () => {
  //   const api = API.create()
  //   const category = await api.getCategories()
  //   this.setState({
  //     dataSource: this.ds.cloneWithRowsAndSections(category.data)
  //   })
  // }

  setupCategories () {
    if (!this.props.categoriesPayload) {
      this.props.categoriesRequest()
    } else {
      this.setState({
          dataSource: this.props.categoriesPayload.categories
          // dataSource: this.props.categoriesPayload.categories
        // id: this.props.categoriesPayload.id,
        // name: this.props.categoriesPayload.name
      }) 
    }
  }

  checkCategories (newProps) {
    this.forceUpdate();
    if (newProps.categoriesPayload) {
      this.setState({
        // categories: newProps.categoriesPayload.categories
        dataSource: this.state.dataSource.cloneWithRows(newProps.categoriesPayload.categories)
        
        // id: this.props.categoriesPayload.id,
        // name: this.props.categoriesPayload.name
        
      })
    }
  }

   componentWillMount () {
    // setup initial Chapter if Redux exist
    this.setupCategories()
  }

  componentWillReceiveProps (newProps) {
    // check new Chapter after request the chapter
    this.checkCategories(newProps)
  }
  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  render () {
    const { navigate } = this.props.navigation
    console.log(navigate);
    return (
      <ScrollView bounces={false}>
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
        <Text> blablabla</Text>
      </ScrollView>

    )
  }
}
ApiTestingScreen.propTypes = {}

const mapStateToProps = (state) => {
  return {
    categoriesPayload: state.categories.categoriesPayload,
    categoriesError: state.categories.categoriesError,
    categoriesFetching: state.categories.categoriesFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoriesRequest: () => dispatch(CategoriesActions.categoriesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiTestingScreen)
