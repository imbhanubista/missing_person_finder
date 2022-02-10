import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  UserDeleteOutlined,
  ContactsOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const {Content, Footer, Sider, Header } = Layout;

const SideNav=(props)=>{

  const navigate = useNavigate()

// to navigate
  const handleClick = (data)=>{
    navigate(data.key)
  }
  // to get data
  const selector = useSelector(state=>state.reducers)
    return(
        <>
        
        <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '125vh',
        position: 'fixed',
        left: 0,
        top: 90,
        bottom: 0,
        
        
      }}
    >
      <div className="logo" />
      
      <Menu onClick={handleClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="/home" icon={<UserOutlined />}>
          <strong>{selector.details.firstname} {selector.details.lastname}</strong>
        </Menu.Item>
        <Menu.Item key="/postmissing" icon={<FileAddOutlined />} >
          Post Missing Person
        </Menu.Item>
        <Menu.Item key="/listmissing" icon={<VideoCameraOutlined />}>
          List Missing Person
        </Menu.Item>
        <Menu.Item key="/listfound" icon={<UploadOutlined />}>
          List Found Person
        </Menu.Item>
        <Menu.Item key="/submitlist" icon={<BarChartOutlined />}>
          Submitted List
        </Menu.Item>
        <Menu.Item key="/dltrequest" icon={<UserDeleteOutlined />}>
          Delete Request
        </Menu.Item>
        <Menu.Item key="/about" icon={< ContactsOutlined/>}>
          About Us
        </Menu.Item>
        {/* for calendar */}
        
      </Menu>
    </Sider>
    
    <Layout className="site-layout" >
      {/* <Header className="site-layout-background"  >  </Header> */}
      <Content style={{ margin: '1px 40px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
         {props.children}
        
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Copyright ©2022 Created by Bistaify</Footer>
    </Layout>
  </Layout>
        </>
    )
}
export default SideNav;