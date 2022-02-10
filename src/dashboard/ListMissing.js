import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card,Row,Col,Typography } from "antd";
import SideNav from "./SideNav";
import HeaderTitle from "../components/Header";
import Layout from "antd/lib/layout/layout";

const ListMissing = () => {
  const [loading, setLoading] = useState(true);
  const { Title } = Typography;
  const { Meta } = Card;
  const [list, setList] = useState([]);
  const selector = useSelector((state) => state.reducers);
  const getApiData = async () => {
    setLoading(true);
    const listData = await axios({
      url: "https://ymissing.herokuapp.com/api/admin/missing",
      method: "GET",
      headers: {
        apptoken: "App Token " + selector.token,
      },
    });
    setList(listData.data);
    setLoading(false);
    console.log(listData.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <HeaderTitle />
      <SideNav>
        {loading ? (
          "wait for a while, data is loading..."
        ) : (
          <>
            <h1 className="missinglisthead">Missing Person List</h1> <hr />
            <Row justify="start">
            {list.missing.map((data, index) => {
              return (
                <Layout className="site-layout" style={{ marginLeft: 120 }}>
                  
                   <Col span={6}>
                   <Card
                        key={index}
                        hoverable
                        style={{
                          width: 280,
                          backgroundColor: "#CDE4ED",
                          border: "1px solid red",
                        }}
                        cover={
                          <img
                            src={data.image}
                            alt="Photo"
                            className="missingCard"
                          />
                        }
                        title={
                          <Title
                            level={3}
                            style={{ color: "red", fontSize: 40 }}
                          >
                            {data.status}
                          </Title>
                        }
                      >
                        <Meta
                          title={data.name}
                          description={
                            <>
                              {data.date} <br />
                              <b>Contact Person:</b> {data.contact_person}{" "}
                              <br />
                              <b>Contact No.</b> {data.contact_number}
                            </>
                          }
                        />
                      </Card>{" "}
                      <br />
                
                   </Col>   
                  
                     
                </Layout>
              );
            })}
            </Row>
          </>
        )}
      </SideNav>
    </div>
  );
};

export default ListMissing;
