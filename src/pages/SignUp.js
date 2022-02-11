import React from "react";
import { Card, Input, Space, Typography, Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const { Title } = Typography;

  //   state for loading when data is loading
  const [loading, setLoading] = useState(false);
  //   navigation for login button
  let loginNa = useNavigate();

  //   function to handle login button
  const loginNav = () => {
    loginNa("/");
  };

  const onFinish = async (values) => {
    setLoading(true);
    let signupData = await axios.post(
      "https://ymissing.herokuapp.com/api/auth/register",
      values
    );
    if (signupData.data.type === "error") {
      Swal.fire("Error", signupData.data.msg, "error");
    } else {
      Swal.fire("Success", signupData.data.msg, "success");
      loginNa("/");
    }
    setLoading(false);
  };

  return (
    <>
      <Header /> <br />
      <Card
        title={
          <Title level={2} style={{ color: "#007373" }}>
            {" "}
            Sign Up
          </Title>
        }
        className="card"
        bordered={true}
        style={{ margin: "auto", height: 570 }}
      >
        <Form onFinish={onFinish}>
          <Space direction="vertical">
            <Form.Item
              name={"email"}
              rules={[{ required: true, message: "Email is required!" }]}
            >
              <Input
                placeholder="Email Address"
                bordered={true}
                allowClear={true}
                size="large"
                style={{ padding: 5, borderRadius: 10, width: 300 }}
              />
            </Form.Item>
            {/* first name field */}
            <Form.Item
              name={"firstname"}
              rules={[{ required: true, message: "First Name Empty!" }]}
            >
              <Input
                placeholder="First Name"
                bordered={true}
                allowClear={true}
                size="large"
                style={{ padding: 5, borderRadius: 10, width: 300 }}
              />
            </Form.Item>
            {/* Last Name field */}
            <Form.Item
              name={"lastname"}
              rules={[{ required: true, message: "Lastname Empty!" }]}
            >
              <Input
                placeholder="Last Name"
                bordered={true}
                allowClear={true}
                size="large"
                style={{ padding: 5, borderRadius: 10, width: 300 }}
              />
            </Form.Item>
            {/* User Name Field */}
            <Form.Item
              name={"username"}
              rules={[{ required: true, message: "Username Empty!" }]}
            >
              <Input
                placeholder="User Name"
                bordered={true}
                allowClear={true}
                size="large"
                style={{ padding: 5, borderRadius: 10, width: 300 }}
              />
            </Form.Item>
            {/* Password field */}
            <Form.Item
              name={"password"}
              rules={[{ required: true, message: "Password Empty!" }]}
            >
              <Input.Password
                placeholder="Password"
                bordered={true}
                size="large"
                style={{ padding: 5, marginTop: 2, borderRadius: 10 }}
              />
            </Form.Item>
            {/* Sign Up button */}
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
              className="login-form-button"
            >
              Sign Up
            </Button>
            Already a user?{" "}
            <Button type="link" onClick={loginNav}>
              {" "}
              <strong>Login</strong>{" "}
            </Button>
          </Space>
        </Form>
      </Card>
    </>
  );
};

export default SignUp;
