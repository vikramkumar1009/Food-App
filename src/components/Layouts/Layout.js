import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <section>
        <Outlet/>
      </section>
      <Footer />
    </>
  );
}

export default Layout;
