import React from "react"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import LeftMenu from "./LeftMenu"
import MainContainer from "./MainContainer"

const Layout = () => {
  return (
    <div style={{background:"#1D272C", color: "white" }}>
      <Header/>
      <Content>
        <LeftMenu />
        <MainContainer />
      </Content>
      <Footer/>
    </div>
  )
}

export default Layout