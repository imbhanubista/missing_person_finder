import { Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Card, Input, Space, Button, Divider, Typography, Form } from "antd";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../components/Header";
import axios from "axios";
import Swal from "sweetalert2";
import { handleForgetApi } from "../apiHandlingService";
const ForgetPass = () => {
  const { Title } = Typography;
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  const lognav = useNavigate();

  //function to handle login text
  const loginHandle = () => {
    lognav("/");
  };

  // function for ant form
  const onFinish = async (values) => {
    setLoading(true);
   try{
      let forgetApi = await handleForgetApi(values)

      // let forgetApi = await axios.post(
      //   "https://ymissing.herokuapp.com/api/auth/forgot",
      //   values
      // );
      if (forgetApi.type === "error") {
        Swal.fire("Error", forgetApi.msg, "error");
      } else {
        Swal.fire("Success", forgetApi.msg, "success");
        nav("/reset?email=" + values.email);
      }
   }
   catch(e){
     Swal.fire("Error",e.message,"error")
   }
    setLoading(false);
  };

    

  return (
    <>
      <HeaderTitle />
      <Card
        title={
          <Title level={2} style={{ color: "#007373" }}>
            Forget Password?
          </Title>
        }
        bordered={true}
        style={{ margin: "auto", marginTop: 7 }}
        className="card"
      >
        {" "}
        <Divider />
        <Form onFinish={onFinish}>
          <Space direction="vertical">
            <Form.Item
              name={"email"}
              rules={[{ required: true, message: "Email is required!" }]}
            >
              <Input
                placeholder="Enter Email"
                bordered={true}
                allowClear={true}
                size="large"
                style={{ padding: 5, borderRadius: 10, width: 300 }}
              />
            </Form.Item>
            <Button
              size="lg"
              type="primary"
              loading={loading}
              htmlType="submit"
              className="login-form-button"
            >
              Continue
            </Button>
            {/* <button className="login-form-button">Continue</button> */}
            <strong>
              Remember Password?{" "}
              <Button type="link" onClick={loginHandle}>
                Login
              </Button>{" "}
            </strong>
          </Space>
        </Form>
      </Card>
    </>
  );
};

export default ForgetPass;
