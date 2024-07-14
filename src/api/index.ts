export default null;
/* import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage'

const URL = "http://localhost:5000/api/v1";
const instance = axios.create({
  baseURL: URL,
});

instance.interceptors.request.use(
  async(config)=>{
    const token = await AsyncStorage.getItem('userToken')
    if(token){
      config.headers.Authorization=`Bearer ${token}`
    }
    return config
  },
  (err) =>{
    return Promise.reject(err)
  }
)

export default instance;
 */
