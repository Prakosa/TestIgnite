import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center'
  },
  content:{
    flexDirection: 'column'
  },
  roundedContent:{
    backgroundColor:'#fff', 
    flex:1,
    height: 220,
    marginTop:16,
    marginRight:16,
    marginLeft:16,
    borderRadius:20,
    borderWidth: 1,
    margin: 0,
    borderColor: '#D32F2F'
  },
  contentRow: {
    flexDirection: 'row'
  },
  contentRowColumn: {
    flexDirection: 'column'
  },
  imageTitle: {
    width: 150,
    height: 150,
    borderRadius:20,
    marginTop: 8,
    marginLeft:8
  },
  contentColumn: {
    flexDirection:'row'
  },
  locationDistance: {
    flex: 1,
    marginTop: 8,
    marginLeft: 8,
    paddingBottom: 16,
    fontSize: 20,
    color: 'black'
  },
  restaurantName: {
    marginTop: 0,
    marginLeft: 16,
    fontSize: 30,
    color: 'black'
  },
  costRating: {
    marginLeft: 16,
    fontSize: 20,
    marginTop: 8,
    color: 'black'
  },
  cuisine: {
    marginLeft: 16,
    fontSize: 20,
    marginTop: 8,
    color: 'black'
  },
  txtDetailResto: {
    fontSize: 20,
    marginTop: 8,
    marginRight: 8,
    paddingBottom: 16,
    textDecorationLine: 'underline',
    color: 'red'
  }
})
