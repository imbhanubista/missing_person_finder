import React, { useEffect, useState } from "react";
import { Button, Divider, PageHeader, Typography,Tag } from "antd";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import { useSelector } from "react-redux";
import LogIn from "../pages/LogIn";

const HeaderTitle = () => {

  // to get data from the store 
  const selector = useSelector(state=>state.reducers)
  let headerText = Object.keys(selector).length>0
  console.log(selector)
  //state to store date
  const [storeDate, setStoreDate]= useState("")
  //for front
  let { Title } = Typography;
  let headnav = useNavigate();
  let head2nav = useNavigate();

  const header1 = () => {
    headnav("/signup");
  };
  const header2 = () => {
    head2nav("/")
  };

  const header3 =()=>{
    head2nav("/")
  }

 useEffect(()=>{
  const date = new Date;
  let hours = date.getHours();
  let status = (hours < 12)? "Good Morning" :
               ((hours <= 18 && hours >= 12 ) ? "Good Afternoon" : "Good Night");
               setStoreDate(status)
  console.log(status);
 },[])

  return (
    <>
      {/* <Header> */}

      <PageHeader
        className="site-page-header"
        
        // onBack={() => null}
        title={
          <Title level={4} style={{ color: "white", cursor: "pointer" }}>
            {" "}
            <strong onClick={header2}> <u>Missing Person Finder</u> </strong> 
          </Title>
          
        }
       
        tags={ <div className="dateFormat"> {new Date().toLocaleString() } <br />
         <strong> {storeDate} - {Object.keys(selector).length>0 && <> {selector.details.firstname} </> } </strong>
          </div>}
        
        extra={[
          <Button key="3" type="primary" onClick={header1}>
            Sign Up
          </Button>,
          <Button key="2" onClick={header3}>
            Login
          </Button>,
        ]}
    //  style={{position:"sticky"}}
     />
      {/* </Header> */}
      <Divider />


    </>
  );
};

export default HeaderTitle;
