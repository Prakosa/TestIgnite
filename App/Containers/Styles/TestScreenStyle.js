import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

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
    toolbarTitle:{
        width: 30,
        height: 30,
        flex:1                //Step 3
    },
  content:{
    backgroundColor:'#fff', 
    flex:1,
    height: 150,
    marginTop:8,
    marginRight:8,
    marginLeft:8,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  contentDetail: {
    flexDirection: 'row',
    flex:1
  },
  contentTitle:{
    color:'#000',
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 60,
    fontSize: 20,
    flex:3
  },
  contentBackgroundButton: {
    flex:1,
    backgroundColor: '#D32F2F',
    marginRight: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  goto: {
    position: 'absolute',
    right: 15,
    top: 35,
    width: 70,
    height: 70
  }
})
