import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Typography, Button } from "antd";
import SideNav from "./SideNav";
import HeaderTitle from "../components/Header";
import Layout from "antd/lib/layout/layout";
import Swal from "sweetalert2";
import { autheticatedApi } from "../api";

const ListMissing = () => {
  const [loading, setLoading] = useState(true);
  const { Title } = Typography;
  const { Meta } = Card;
  const [list, setList] = useState([]);
  const selector = useSelector((state) => state.reducers);
  const getApiData = async () => {
    setLoading(true);
    // const listData = await axios({
    //   url: "https://ymissing.herokuapp.com/api/admin/missing",
    //   method: "GET",
    //   headers: {
    //     apptoken: "App Token " + selector.token,
    //   },
    // });
const listData = await autheticatedApi("GET","/admin/missing")

    setList(listData);
    setLoading(false);
    console.log(listData);
  };
  useEffect(() => {
    getApiData();
  }, []);
  // to handle delete button
  const deleteList = async (id) => {
    let deleteApi = await axios({
      url: "https://ymissing.herokuapp.com/api/admin/missing/" + id,
      method: "DELETE",
      headers: {
        apptoken: "App Token " + selector.token,
      },
    });
    if (deleteApi.data.type === "error") {
      Swal.fire("Error", deleteApi.data.msg, "error");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: deleteApi.data.msg,
        showConfirmButton: false,
        timer: 1500,
        toast: "true",
      });
      getApiData();
    }
  };
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
                  <Layout className="site-layout" style={{ marginLeft: 90 }}>
                    <Col span={6}>
                      <Card
                        key={index}
                        hoverable
                        style={{
                          width: 260,
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
                        />{" "}
                        <br />
                        {/* DELETE BUTTON */}
                        <Button
                          onClick={() => deleteList(data._id)}
                          type="danger"
                        >
                          Delete
                        </Button>
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
