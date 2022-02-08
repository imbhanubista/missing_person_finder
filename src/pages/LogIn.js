import React from "react";
import { Card, Input, Space, Button, Divider, Typography,Form } from "antd";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../components/Header";
import { useForm } from "react-hook-form";
import axios from "axios";

const LogIn = () => {
  const { Title } = Typography;


  
  const signUNav = useNavigate();
  const click = useNavigate();
  //function to handle forget password
  const handleClick = () => {
    click("/forgetpass");
  };
  const signupNav = () => {
    signUNav("/signup");
  };

  const onFinish =async (values) => {
    let loginData =await axios.post("https://ymissing.herokuapp.com/api/auth/login",
    {email: values.email, password: values.password}
    )
    console.log(loginData.data)
  }

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

          {/* using react hooks form */}
        <Form 
        onFinish={onFinish}
        >
        <Space direction="vertical">

<Form.Item
name={"email"}
rules={[{ required: true, message: 'Please input your Email!' }]}
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
rules={[{ required: true, message: 'Please input your Password!' }]}
>
<Input.Password
  placeholder="Password"
  bordered={true}
  size="large"
  style={{ padding: 5, marginTop: 2, borderRadius: 10 }}

/>
</Form.Item>

 <button className="login-form-button">Login</button>
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
