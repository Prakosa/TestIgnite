import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  content:{
    backgroundColor:'#fff', 
    flex:1,
    height: 150,
    marginTop:16,
    marginRight:16,
    marginLeft:16,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#D32F2F'
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
  },
  contentModalTop: {
    marginTop: 100,
    backgroundColor:'#fff', 
    flex: 1,
    flexDirection: 'column',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#D32F2F'
  },
  contentModalBottom: {
    flex:1.5
  },
  txtModal: {
    color:'#000',
    textAlign:'center',
    marginTop: 16,
    marginBottom: 16,
    fontWeight:'bold',
    fontSize: 25
  },
  button: {
    color: "white"
  }
})
