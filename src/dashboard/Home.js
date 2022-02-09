import Layout, { Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import HeaderTitle from '../components/Header'
import SideNav from './SideNav'

const Home = () => {
  return (
    <div>
             <HeaderTitle/>
        <SideNav>
          Hello world
        </SideNav>
    </div>
  )
}

export default Home