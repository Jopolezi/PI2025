import { Outlet } from 'react-router-dom'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import styled from 'styled-components'
import { LayoutWrapper } from "./styledLayout"

const Layout = () => {

  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
      <Footer />
    </>
  )
}

export default Layout