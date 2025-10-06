import { Outlet } from 'react-router-dom'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import styled from 'styled-components'

const Layout = () => {

  const LayoutWrapper = styled.div`
  padding-top: 80px;  
  min-height: 100vh;

  @media (max-width: 768px) {
  padding-top: 0;
  }
  `;

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