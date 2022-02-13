import { autheticatedApi, unAuthApi } from "./api"
import apiUrls from "./apiUrls"

export const handleLoginAPi = async (data)=>{
    let response = await unAuthApi(apiUrls.auth.login.method,apiUrls.auth.login.url,data)
    return response

}

// here "auth vaneko chai apiUrls bata aako data ho"
 
export const handleForgetApi = async(data)=>{
    let response = await unAuthApi (apiUrls.auth.forgot.method, apiUrls.auth.forgot.url, data)
    return response
}

export const handleReset = async (data)=>{
    let response = await unAuthApi(apiUrls.auth.reset.method,apiUrls.auth.reset.url, data)
    return response
}
export const handleSignup= async (data)=>{
    let response = await unAuthApi(apiUrls.auth.signup.method, apiUrls.auth.signup.url, data)
    return response
}

export const handleMarkFound = async(id)=>{
    let response = await autheticatedApi(apiUrls.afterAuth.markFound.method,`${apiUrls.afterAuth.markFound.url}/${id}`)
    return response
}

export const  handleListFound = async ()=>{
    let response = await autheticatedApi(apiUrls.afterAuth.listFound.method, apiUrls.afterAuth.listFound.url)
    return response
}