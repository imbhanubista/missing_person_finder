import React from "react";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";
import Logo from "../images/logo2.jpg";
import bhanu from "../images/profile/bhanu.jpeg";
import dipesh from "../images/profile/dipesh.jpg";
import manish from "../images/profile/manish.jpeg";
import bidhya from "../images/profile/bidhya.jpeg";
import "../style/profile.css";
import { Popover } from "antd";

const About = () => {
  const dipeshcontent = (
    <div className="profile">
      {/* <h3 className='user-name'>Dipesh Mishra</h3> */}
      <h5>Founder</h5>
      <p>Currently working at Tekkon Tech</p>
    </div>
  );

  return (
    <>
      <HeaderTitle />
      <SideNav>
        <img src={Logo} alt="Yarti Tech" height={270} width={600} /> <br />
        <h2 className="heading">
          <span>Meet</span> our Team{" "}
        </h2>
        <Popover content={dipeshcontent} title={<h3>Dipesh Mishra</h3>}>
          <div className="profiles">
            <div className="profile">
              <img
                className="profile-img"
                src={dipesh}
                height={40}
                width={40}
              />{" "}
              <br /> <strong>Founder </strong>
            </div>
          </div>
        </Popover>{" "}
        <br />
        <div className="container">
          <div className="profiles">
            {/* <div className="profile">
                      <img src={dipesh} alt="Dipesh Mishra" className='profile-img' />
                      <h3 className='user-name'>Dipesh Mishra</h3> 
                      <h5>Founder</h5>
                      <p>Currently working at Tekkon Tech</p>
                    </div>  */}

            <div className="profile">
              <img
                src={bhanu}
                alt="BhanuBhakta Bista"
                className="profile-img"
              />
              <h3 className="user-name">BhanuBhakta Bista</h3>
              <h5>Co</h5>
              <p>Currently working at Yarti Technologies</p>
            </div>

            <div className="profile">
              <img
                src={manish}
                alt="Manish Kumar Yadav"
                className="profile-img"
              />
              <h3 className="user-name">Manish Kumar Yadav</h3>
              <h5>Developer</h5>
              <p>Currently working at Yarti Technologies</p>
            </div>
            <div className="profile">
              <img
                src={bidhya}
                alt="Bidhyanand Poddar"
                className="profile-img"
              />
              <h3 className="user-name">Bidhyanand Poddar</h3>
              <h5>Developer</h5>
              <p>Currently working at Yarti Technologies</p>
            </div>
          </div>
        </div>
      </SideNav>
    </>
  );
};

export default About;
