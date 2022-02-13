// import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Typography, Card, Comment, Divider, Input, Button, Form } from "antd";
import HeaderTitle from "../components/Header";
import ReactCodeInput from "react-code-input";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { handleReset } from "../apiHandlingService";

const ChangePass = () => {
  // for loading the data
  const [loading, setLoading] = useState(false);
  // state to store verification code
  const [inputStore, setInputStore] = useState("");
  // navigation after the password is changed
  const psw = useNavigate();
  // for title
  const { Title } = Typography;
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const onFinish = async (values) => {
    setLoading(true);
    let getChangePass = await handleReset({...values, code: inputStore, email:query.get("email")})
    // let getChangePass = await axios.post(
    //   "https://ymissing.herokuapp.com/api/auth/reset",
    //   {
    //     ...values,
    //     code: inputStore,
    //     email: query.get("email"),
    //   }
    // );
    if (getChangePass.type === "error") {
      Swal.fire("Error", getChangePass.msg, "error");
    } else {
      Swal.fire("Success", getChangePass.msg, "success");
      psw("/");
    }
    setLoading(false);
  };
  const inputHandler = (e) => {
    setInputStore(e);
  };
  return (
    <>
      <HeaderTitle />

      <Card
        title={
          <Title level={3} style={{ color: "#007373" }}>
            Change your password
          </Title>
        }
        style={{ margin: "auto" }}
        className="card"
      >
        <Comment
          content={
            <p>
              Type in the code we sent to <br />{" "}
              <strong style={{ color: "blue" }}>{query.get("email")}</strong>{" "}
            </p>
          }
        />
        {/* <InputNumber min={1} max={6} placeholder="Enter Pin" style={{width:150}}/> */}
        <ReactCodeInput
          type="text"
          autoFocus={true}
          fields={5}
          onChange={inputHandler}
        />

        <Divider />
        {/* antd form start */}
        <Form onFinish={onFinish}>
          <Form.Item name={"pw"}>
            <Input.Password
              placeholder="Password"
              bordered={true}
              size="large"
              // style={{ padding: 5, marginTop: 2, borderRadius:15 }}
            />
          </Form.Item>
          <Form.Item name={"rpw"}>
            <Input.Password
              placeholder="Repeat Password"
              bordered={true}
              size="large"
              // style={{ padding: 5, marginTop: 4, borderRadius:15 }}
            />
          </Form.Item>
          <br /> <br />
          <Button
            htmlType="submit"
            size="large"
            type="primary"
            className="login-form-button"
            loading={loading}
          >
            Change Password
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default ChangePass;
