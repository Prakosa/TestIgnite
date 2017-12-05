import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    flex:1  
  },
  centered: {
    alignItems: 'center'
  },
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },
  content:{
    backgroundColor:'#fff',
    flexDirection: 'column',
    marginTop: 8
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
    marginTop: 8,
    marginLeft:16
  },
  contentColumn: {
    flexDirection:'row'
  },
  locationDistance: {
    flex: 1,
    marginLeft: 16,
    paddingBottom: 16,
    fontSize: 20,
    color: 'black'
  },
  restaurantName: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 20,
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
  }
})
