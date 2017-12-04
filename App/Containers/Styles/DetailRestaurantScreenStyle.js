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
  container: {
      flexDirection: 'column',
      flex: 1
    },
    content:{
    backgroundColor:'#fff',
    flexDirection: 'column',
    marginTop: 8
  },
    imageContent: {      
      marginLeft: 56,
      width: 300,
      height: 300
    },
    restaurantName: {
      fontSize: 30,
      textAlign: 'center',
      color: 'black'
    },
    contentTitleTop: {
      fontSize: 20,
      marginLeft: 16,
      color: 'black'
    },
    contentTitleBottom: {
      fontSize: 20,
      paddingTop: 16,
      marginLeft: 16,
      color: 'black'
    },
    contentTitleOther:{
      fontSize:20,
      marginLeft: 16,
      color: 'black'
    }

})
