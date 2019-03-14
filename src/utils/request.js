import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080/static'

const apiUrl = {
  "menu": "munu.json"
}

let request = async (type = 'GET', url = '', data = {}) => {
  let result
  type = type.toUpperCase()
  url = apiUrl[url]
  if (type === 'GET') {
    await axios.get(url, {
        params: data
      })
      .then(res => {
        result = res.data
      })
  } else if (type === 'POST') {
    await axios.post(url, JSON.stringify(data))
      .then(res => {
        result = res.data
      })
  }
  return result
}

export default request