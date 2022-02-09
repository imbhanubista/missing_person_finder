import React, { useEffect, useState } from "react";
import { Card, Input, Space, Button, Divider, Typography, Form } from "antd";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../components/Header";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { actionReducer } from "../reducersPage/action/action";
import { useSelector } from "react-redux";

const LogIn = () => {
  // navigation to handle login button
  const loginBtn = useNavigate();

  // to get data from the redux store to check whether the user is logged in or not
  const selector = useSelector((state) => state.reducers);
  useEffect(() => {
    if (Object.keys(selector).length > 0) {
      loginBtn("/home");
    }
  }, []);
  // to store data in redux store using dispatch
  const dispatch = useDispatch();
  // for title font given by antd design
  const { Title } = Typography;

  // store to make sure whether the data is loadging or !
  const [loading, setLoading] = useState(false);

  // navigation for signup panel
  const signUNav = useNavigate();
  // navigation to go to forget password
  const click = useNavigate();
  //function to handle forget password
  const handleClick = () => {
    click("/forgetpass");
  };
  const signupNav = () => {
    signUNav("/signup");
  };

  const onFinish = async (values) => {
    setLoading(true);
    let loginData = await axios.post(
      "https://ymissing.herokuapp.com/api/auth/login",
      { email: values.email, password: values.password }
    );
    if (loginData.data.type === "error") {
      Swal.fire("Error", loginData.data.msg, "error");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
        toast: "true",
      });
      dispatch(actionReducer(loginData.data));
      loginBtn("/home");
    }
    setLoading(false);
  };

  return (
    <>
      <HeaderTitle />
      <Card
        title={
          <Title level={3} style={{ color: "#007373" }}>
            Sign In
          </Title>
        }
        bordered={true}
        style={{ margin: "auto", marginTop: 40 }}
        className="card"
      >
        {" "}
        <br />
        {/* using ant design FORM tag */}
        <Form onFinish={onFinish}>
          <Space direction="vertical">
            <Form.Item
              name={"email"}
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                placeholder="Email Address"
                bordered={true}
                allowClear={true}
                size="large"
                style={{ padding: 5, borderRadius: 10, width: 300 }}
              />
            </Form.Item>
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                bordered={true}
                size="large"
                style={{ padding: 5, marginTop: 2, borderRadius: 10 }}
              />
            </Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              className="login-form-button"
              loading={loading}
            >
              Login
            </Button>
            <Button type="link" onClick={handleClick}>
              Forget Password?
            </Button>
            <Divider />
            New User?{" "}
            <Button type="link" onClick={signupNav}>
              {" "}
              <strong>Sign Up</strong>{" "}
            </Button>
          </Space>
        </Form>
      </Card>
    </>
  );
};

export default LogIn;
