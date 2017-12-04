import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center',
        flex: 1
    },
    container:{
        height: 608
    },
    toolbarTitle:{
        width: 30,
        height: 30,
        flex:1                //Step 3
    },
  content:{
    backgroundColor:'#fff', 
    width: 412,
    height: 150,
    marginTop:8
  },
  contentTitle:{
    color:'#000',
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 60,
    fontSize: 20,
    flex:1
  }
})
