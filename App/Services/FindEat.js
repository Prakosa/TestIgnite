import apisauce from 'apisauce'
import AppConfig from '../Config/AppConfig'

const create = (baseURL = AppConfig.baseURL) => {

const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'user_key': AppConfig.userKey
    },
    // 10 second timeout...
    timeout: 10000
  })

const apiForSaga=(path, type, body)=>{
      var bodyJson={}
      if(type !=='GET'){
          bodyJson = JSON.parse(body)
      }
      if(type ==='POST'){
          return api.post(path, bodyJson)
      } else if(type==='PUT'){
          return api.put(path, bodyJson)
      } else if(type==='DELETE'){
          return api.delete(path, bodyJson)
      } else {
          api.setHeaders({
            'user_key': AppConfig.userKey
          })
          if(path.includes('nearest_properties')){
              api.timeout=60000
          }else{
              api.timeout=30000
          } 
          return api.get(path)
      }
  }
  return {
      apiForSaga
  }
}

export default {
  create
}