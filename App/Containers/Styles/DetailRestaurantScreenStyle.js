import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center'
  },
  container: {
      flexDirection: 'column',
      flex: 1
    },
    content:{
    backgroundColor:'#fff', 
    flex:1,
    height: 220,
    marginTop:16,
    marginRight:16,
    marginLeft:16,
    marginBottom:16,
    borderRadius:20,
    borderWidth: 1,
    margin: 0,
    borderColor: '#D32F2F',
    flexDirection: 'column'
  },
    imageContent: { 
      marginTop: 16,
      marginLeft: 1,
      marginRight: 1,
      flex: 1,
      height: 300
    },
    restaurantName: {
      fontSize: 30,
      flex:1,
      textAlign: 'center',
      color: 'black'
    },
    contentTitleTop: {
      fontSize: 20,
      flex:1,
      marginLeft: 16,
      color: 'black'
    },
    contentTitleBottom: {
      fontSize: 20,
      paddingTop: 16,
      marginLeft: 16,
      color: 'black',
      flex:1
    },
    contentTitleOther:{
      fontSize:20,
      marginLeft: 16,
      marginBottom: 16,
      color: 'black',
      flex:1
    }

})
