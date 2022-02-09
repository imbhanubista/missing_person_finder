import React from 'react'
import HeaderTitle from '../components/Header'
import SideNav from './SideNav'
import Logo from '../images/logo2.jpg'

const About = () => {
  return (
    <>
        <HeaderTitle/>
        <SideNav>
            <img src= {Logo} alt="Yarti Tech" height={270} width={600} /> <br />
                Founder: Dipesh Mishra
        </SideNav>
    </>
  )
}

export default About