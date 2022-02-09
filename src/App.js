
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import PostMissing from './dashboard/PostMissing';
import Routing from './Routing/Routing';

function App() {
  // const callAPi = async ()=>{
  //   let response = await axios({
  //     url : "https://ymissing.herokuapp.com/api/admin/missing",
  //     method : "GET",
  //     headers : {
  //       "apptoken" : "App Token "+ __YOUR__TOKEN__HERE
  //     }
  //   })
  //   console.log(response.data)
  // }
  // useEffect(()=>{
  //   callAPi()
  // },[])
  return (
    <div>

<Routing/>
{/* <PostMissing/> */}

    </div>
  );
}

export default App;
