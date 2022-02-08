import React, { useEffect, useState } from "react";
import { Button, Divider, PageHeader, Typography,Tag } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../style/style.css";

const HeaderTitle = () => {

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
    head2nav("/");
  };

  // useEffect(()=>{
   
  //     let date = new Date();
  //     let currentDate = date.getHours()
  //     if (currentDate>12){
  //       <div>
  //         Good Morning
  //       </div>
  //     }else{
  //       <div>
  //         Good Afternoon
  //       </div>
  //     }
  //   setStoreDate(currentDate)
  // },[])

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
         <strong> {storeDate} - Bhanu </strong>
          </div>}
        
        extra={[
          <Button key="3" type="primary" onClick={header1}>
            Sign Up
          </Button>,
          <Button key="2" onClick={header2}>
            Login
          </Button>,
        ]}
      />
      {/* </Header> */}
      <Divider />


    </>
  );
};

export default HeaderTitle;
