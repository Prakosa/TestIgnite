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
      if(type =='GET'){
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