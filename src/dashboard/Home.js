import React, { useEffect, useState } from "react";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Dash from "../images/lo.jpg";
import { Row, Col, Card } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav1 = useNavigate();
  const nav2 = useNavigate();
  const nav3 = useNavigate();

  const [value, setValue] = useState(new Date());
  // to set data coming from api
  const [dash, setDash] = useState({});
  // to aware data is loading
  const [loading, setLoading] = useState(true);
  const select = useSelector((state) => state.reducers);
  const dashboardApi = async () => {
    const getApi = await axios({
      url: "https://ymissing.herokuapp.com/api/admin/dash",
      method: "GET",
      headers: {
        apptoken: "App Token " + select.token,
      },
    });
    console.log(getApi.data);
    setDash(getApi.data);
    setLoading(false);
  };
  useEffect(() => {
    dashboardApi();
  }, []);
  const handleMis = () => {
    nav1("/listmissing");
  };
  const handlesubmit = () => {
    nav2("/submitlist");
  };
  const handlefound = () => {
    nav3("/listfound");
  };
  return (
    <div>
      <HeaderTitle />
      <SideNav>
        <h2>Welcome to Home Page</h2>
        <Layout className="site-layout">
          <Content style={{ overflow: "initial", margin: "1px 15px 0" }}>
            <img src={Dash} alt="" height={200} width="100%" /> <br /> <br />
            <span>You</span> are in the right place to find a missing person,You
            can post your content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita officiis nemo in, obcaecati fugit
            delectus, omnis distinctio asperiores dolores odit voluptate,
            mollitia itaque similique aut aliquid blanditiis quae voluptas vel!{" "}
            <br />
          </Content>
          <Sider className="sider">
            <Calendar onChange={setValue} value={value} className="calendar" />
          </Sider>
        </Layout>{" "}
        <br />
        <Layout>
          <h1 className="dashboard">
            <u>Dashboard</u>
          </h1>{" "}
          <br />
        </Layout>
        <Layout style={{ marginLeft: 100 }}>
          {loading ? (
            "Dashboard is Loading"
          ) : (
            <>
              <Row gutter={16} style={{ marginLeft: 5 }}>
                <Col className="gutter-row" span={6}>
                  <Card className="card1" onClick={handleMis}>
                    {dash.data.missing} <br />
                    Missing Persons
                  </Card>
                </Col>

                <Col className="gutter-row" span={6}>
                  <Card className="card2" onClick={handlesubmit}>
                    {dash.data.submitted} <br />
                    Report Submitted
                  </Card>
                </Col>

                <Col className="gutter-row" span={8}>
                  <Card className="card3" onClick={handlefound}>
                    {dash.data.found} <br />
                    Found Persons
                  </Card>
                </Col>
              </Row>
            </>
          )}
        </Layout>
      </SideNav>
    </div>
  );
};

export default Home;
