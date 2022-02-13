import axios from "axios"
import store from './store'
let baseURL = "https://ymissing.herokuapp.com/api"
export const autheticatedApi =async (method,url,data)=>{
    //useSelector haru jasto hooks chai, react ko componetn ma matra lina painxa, ani yo chai hamro component haina, yo just euta function ho, tei vayera, hamle store bata liyeko
    let selector = store.getState().reducers
    let response= await axios({
        method,
        url : baseURL+url,
        data,
        headers:{
            apptoken: "App Token " + selector.token,
        }
    })
    return response.data
}

export const unAuthApi = async (method,url,data)=>{
    let response = await axios({
        method,
        url : baseURL+url,
        data
    })
    return response.data
}