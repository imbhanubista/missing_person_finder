import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ListFound = () => {
    const selector = useSelector(state=>state.reducers)
    const [foundList, setFoundList] = useState({})
    const[loading,setLoading] = useState(true)
    console.log(selector)
    const getFoundData = async()=>{
        const foundlist = await axios({
            url:"https://ymissing.herokuapp.com/api/admin/missing/found",
            method:"GET",
            headers:{
                apptoken: "App Token " + selector.token
            }
            
        })
    console.log(foundlist.data)
    setFoundList(foundlist.data)
    setLoading(false)
        
    }
    useEffect(()=>{
        getFoundData()
    },[])


  return (
    <div>
       {loading?"Data is loading...":
       <>
        {foundList.contact_number}
       </>
       }

    </div>
  )
}

export default ListFound