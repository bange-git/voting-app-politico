import React from "react";
import Header from "./header/Header";
import FooterSection from "./footer/Footer";

export interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterSection />
    </>
  );
};

export default Layout;
