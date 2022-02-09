import React from 'react'
import {Card, Input, Space, Button, Divider, Typography,Form,Upload} from 'antd'
import SideNav from './SideNav'
import { UploadOutlined } from '@ant-design/icons';
import HeaderTitle from '../components/Header'
const PostMissing = () => {
const {Title}= Typography
const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  const onFinish =(values)=>{
console.log(values)
  }
  return (
   <div>
   <HeaderTitle/>
    <SideNav>
    <Card className='card'
title={<Title level={2} style={{color: "#007373"}}>Post Missing Person</Title>}
style={{ margin: "auto",  }}
>
    <Form onFinish={onFinish}>
        <Space direction='vertical'>
            <Form.Item name="name">
                <Input
                placeholder='Person Name'
                bordered={true}
                allowClear={true}
                size="large"
                >
                </Input>
            </Form.Item>
            <Form.Item name="location">
                <Input 
                placeholder='Enter Location'
                bordered={true}
                allowClear={true}
                >
                </Input>
            </Form.Item>

            <Form.Item name="contact_person">
                <Input 
                placeholder='Contact Person'
                bordered={true}
                ></Input>
            </Form.Item>

            <Form.Item name="contact_number">
                <Input
                placeholder='Contact Number'
                bordered={true}
                ></Input>
            </Form.Item>
            {/* field for photo upload */}
            <Form.Item
        name="image"
        // label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        // extra="Upload Photo"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Button htmlType='submit' className="login-form-button" type='primary'>Post</Button>
        </Space>
    </Form>
</Card>
    </SideNav>
   </div>
  )
}

export default PostMissing