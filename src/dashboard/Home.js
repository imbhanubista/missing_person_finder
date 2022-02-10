import React, { useState } from "react";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
const Home = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <HeaderTitle />
      <SideNav>
        <h2>Welcome to Home Page</h2>
        <Layout className="site-layout">
          <Content style={{ overflow: "initial", margin: "1px 40px 0" }}>
            <span>You</span> are in the right place to find a missing person,You
            can post your content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita officiis nemo in, obcaecati fugit
            delectus, omnis distinctio asperiores dolores odit voluptate,
            mollitia itaque similique aut aliquid blanditiis quae voluptas vel!
          </Content>
          <Sider className="sider">
            <Calendar onChange={setValue} value={value} className="calendar" />
          </Sider>
        </Layout>
      </SideNav>
    </div>
  );
};

export default Home;
