import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ListMissing = () => {
    const [list, setList] = useState([])
    const selector = useSelector(state=>state.reducers)
    const getApiData = async()=>{
        const listData = await axios({
            url:"https://ymissing.herokuapp.com/api/admin/missing",
            method: "GET",
            headers:{
                "apptoken": "App Token " + selector.token
            }   
        }
        )
        setList(listData.data)
    }
    useEffect(()=>{
        getApiData()
    },[])
  return (
    <div>
        Hello Muji
    </div>
  )
}

export default ListMissing