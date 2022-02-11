import React from "react";
import {
  Card,
  Input,
  Space,
  Button,
  Divider,
  Typography,
  Form,
  Upload,
} from "antd";
import SideNav from "./SideNav";
import { UploadOutlined } from "@ant-design/icons";
import HeaderTitle from "../components/Header";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const PostMissing = () => {
  const { Title } = Typography;

  // to get token stored in redux store
  const selector = useSelector((state) => state.reducers);
  // for upload click button
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  //  navigation to redirect to list missing data
  const nav = useNavigate();
  // function to handle form data
  const onFinish = async (values) => {
    console.log(values);
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("location", values.location);
    formData.append("contact_person", values.contact_person);
    formData.append("contact_number", values.contact_number);
    formData.append("image", values.image[0].originFileObj);
    let postMissing = await axios({
      url: "https://ymissing.herokuapp.com/api/admin/missing",
      method: "POST",
      headers: {
        apptoken: "App Token " + selector.token,
      },
      data: formData,
    });
    console.log(postMissing.data);
    if (postMissing.data.type === "error") {
      Swal.fire("Error", postMissing.data.msg, "error");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: postMissing.data.msg,
        showConfirmButton: false,
        timer: 1500,
        toast: "true",
      });
      nav("/listmissing");
    }
  };

  return (
    <div>
      <HeaderTitle />
      <SideNav>
        <Card
          className="card"
          title={
            <Title level={2} style={{ color: "#007373" }}>
              Post Missing Person
            </Title>
          }
          style={{ margin: "auto" }}
        >
          <Form onFinish={onFinish}>
            <Space direction="vertical">
              <Form.Item name="name">
                <Input
                  placeholder="Person Name"
                  bordered={true}
                  allowClear={true}
                  size="large"
                ></Input>
              </Form.Item>
              <Form.Item name="location">
                <Input
                  placeholder="Enter Location"
                  bordered={true}
                  allowClear={true}
                ></Input>
              </Form.Item>

              <Form.Item name="contact_person">
                <Input placeholder="Contact Person" bordered={true}></Input>
              </Form.Item>

              <Form.Item name="contact_number">
                <Input placeholder="Contact Number" bordered={true}></Input>
              </Form.Item>
              {/* field for photo upload */}
              <Form.Item
                name="image"
                // label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                // extra="Upload Photo"
              >
                <Upload
                  name="image"
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button"
                type="primary"
              >
                Post
              </Button>
            </Space>
          </Form>
        </Card>
      </SideNav>
    </div>
  );
};

export default PostMissing;
