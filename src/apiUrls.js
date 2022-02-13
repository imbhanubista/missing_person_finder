
const apiUrls = 
    {
        auth : {
            login : {
                method : "POST",
                url : "/auth/login"
            },
            signup : {
                method  : "POST",
                url : "/auth/signup"
            },
           forgot:{
               method: "POST",
               url : "/auth/forgot"
           },
           reset: {
               method: "POST",
               url: "/auth/reset"
           },
           signup: {
               method: "POST",
               url : "/auth/register"
           }

    },
    afterAuth : {
        markFound : {
            method : "GET",
            url  : "/admin/found"
        },
        listFound:{
            method: "GET",
            url : "/admin/missing/found"
        }
    }


}
export default apiUrls;