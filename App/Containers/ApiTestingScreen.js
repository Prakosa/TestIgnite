import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import AlertMessage from '../Components/AlertMessage'
// Styles
import styles from './Styles/ApiTestingScreenStyle'
import CategoriesActions from '../Redux/CategoriesRedux';

class ApiTestingScreen extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      categoriesName: ''
    }
  }

  setupChapter () {
    if (!this.props.categoriesPayload) {
      this.props.categoriesRequest()
    } else {
      this.setState({
        categoriesName: this.props.categoriesPayload.name
      })
    }
  }

  checkChapter (newProps) {
    if (newProps.categoriesPayload) {
      this.setState({
        categoriesName: newProps.categoriesPayload.name
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
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <ScrollView bounces={false}>
        <Text categoriesName={this.state.categoriesName} />
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
