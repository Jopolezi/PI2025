import { Outlet } from "react-router-dom"
import Header from "../common/Header/Header"
import Footer from "../common/Footer/Footer"
import { LayoutWrapper } from "./styledLayout"
import ScrollToTop from "../reset/Scroll"

const Layout = () => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
        <ScrollToTop />
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout
